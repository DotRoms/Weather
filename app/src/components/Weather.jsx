'use client';
import { useState } from 'react';
import { FaSearchLocation } from "react-icons/fa";
import GeneralInformations from './GeneralInformations';
import Humidity from './Humidity';
import Location from './Location';
export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);  // Uncomment to use the state

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error.message);
        return;
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);  // Clear any previous errors
    } catch (error) {
      setError("Failed to fetch weather data: " + error.message);
    }
  };

  return (
    <section className='flex flex-col w-full p-4 items-center'>
      <form onSubmit={handleSubmit} className='flex w-full gap-5 mb-10'>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='
          w-full p-2 rounded-3xl border-4 border-white text-2xl shadow-xl text-center'
        />
        <button type="submit"><FaSearchLocation className="text-white" size={60}/>
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div className='flex flex-col gap-4'>

          <Location location={weatherData}/>
          <GeneralInformations location={weatherData} />
          <Humidity location={weatherData} />
        </div>
        
      
      )}
    </section>
  );
}
