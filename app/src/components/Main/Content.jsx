"use client";
import { getLocalTime } from "@/utils/getLocalTime";
import { useState } from "react";
import handleSubmit from "../../../../utils/fetchingWeather/fetchingWeatherLocation";
import AtmosphereCard from "./Cards/Atmosphere/AtmosphereCard";
import CurrentCard from "./Cards/Current/CurrentCard";
import ForecastCards from "./Cards/Forecast/ForecastCard";
import WindsCard from "./Cards/Winds/WindsCard";
import ContentPresentation from "./Content-Presentation";
import FormSearch from "./FormSearch";
export default function Content() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null); // Init avec `null`

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(location, setError, setWeatherData);
  };

  // Vérifier que weatherData et weatherData.location existent avant d'accéder à localtime
  const timeZone =
    weatherData && weatherData.location ? weatherData.location.localtime : null;
  const localTime = timeZone ? getLocalTime(timeZone) : "N/A";

  // console.log(weatherData.current);
  return (
    <>
      <FormSearch
        location={location}
        onSubmit={onSubmit}
        setLocation={setLocation}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div className="flex flex-col gap-10 p-4">

        <ContentPresentation localTime={localTime} weatherData={weatherData} />
        <div className="flex flex-col sm:flex-row justify-around gap-4">
          <CurrentCard current={weatherData.current} />
          <WindsCard current={weatherData.current}/>
          <AtmosphereCard current={weatherData.current}/>
        </div>
        <div>

          <ForecastCards forecast={weatherData.forecast} location={weatherData.location} />
        </div>

        </div>
      )}
    </>
  );
}
