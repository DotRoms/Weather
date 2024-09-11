"use client";
import { useState } from "react";
import ForecastCardAstro from "./ForecastCard-Astro";
import ForecastCardTemperature from "./ForecastCard-Temperature";

export default function ForecastCard({ forecast, location }) {
  const [metrics, setMetrics] = useState("c");

  const handleChangeMetrics = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setMetrics(value);
  };

  return (
    <div className=" bg-white bg-opacity-10 w-full p-4 rounded-xl text-white">
      <div className="flex flex-col lg:flex-row xl:flex-col  text-center gap-10 w-full justify-around ">
        <div className="flex flex-col xl:flex-row gap-6 justify-around">
          <ForecastCardTemperature
            forecast={forecast}
            handleChangeMetrics={handleChangeMetrics}
            metrics={metrics}
          />
          <ForecastCardAstro astro={forecast.forecastday[0].astro} />
        </div>
        <div className="p-2 w-full lg:w-[65%] xl:w-full xl:h-96">
          <iframe
            className="w-full h-full rounded-xl"
            load="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/view?zoom=12&center=${location.lat},${location.lon}&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
