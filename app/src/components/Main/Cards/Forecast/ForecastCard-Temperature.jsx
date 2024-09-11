import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import ButtonSelectMetrics from "../../../UI/ButtonSelectMetrics";
export default function ForecastCardSelectMetrics({
  forecast,
  metrics,
  handleChangeMetrics,
}) {
  return (
    <div className="flex flex-col-reverse gap-4 items-center  bg-white p-4 rounded-xl bg-opacity-10 xl:w-full xl:justify-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="mb-2">Température Min/Max</h2>
        <p className="flex items-center gap-2">
          {" "}
          <FaArrowDown size={20} color="#7dc8ff" />
         
          {metrics === "c" ? (
            <span className="md:text-xl">
              {forecast.forecastday[0].day.mintemp_c}°C
            </span>
          ) : (
            <span className="md:text-xl">
              {forecast.forecastday[0].day.mintemp_f}°F
            </span>
          )}
        </p>
        <p className="flex items-center gap-2">
          <FaArrowUp size={20} color="#f29e14" />
          {metrics === "c" ? (
            <span className="md:text-xl">
              {forecast.forecastday[0].day.maxtemp_c}°C
            </span>
          ) : (
            <span className="md:text-xl">
              {forecast.forecastday[0].day.maxtemp_f}°F
            </span>
          )}
        </p>
      </div>

      <ul className="flex gap-2">
        <li>
          <ButtonSelectMetrics
            dataValueMetric="c"
            handlerChangeFunction={handleChangeMetrics} // Pas besoin d'envelopper ici
            currentMetric={metrics}
            metrics={<RiCelsiusFill />}
          />
        </li>
        <li>
          <ButtonSelectMetrics
            dataValueMetric="f"
            handlerChangeFunction={handleChangeMetrics} // Pas besoin d'envelopper ici
            currentMetric={metrics}
            metrics={<RiFahrenheitFill />}
          />
        </li>
      </ul>
    </div>
  );
}
