const handleSubmit = async (location, setError, setWeatherData) => {
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
    console.log(data);
    setWeatherData(data);
    setError(null);  // Clear any previous errors
  } catch (error) {
    setError("Failed to fetch weather data: " + error.message);
  }
};

export default handleSubmit;
