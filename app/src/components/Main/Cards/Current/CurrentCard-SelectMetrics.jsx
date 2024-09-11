import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import ButtonSelectMetrics from "../../../UI/ButtonSelectMetrics";
export default function CurrentCardsSelectMetrics({
  current,
  metrics,
  handleChangeMetrics,
}) {
  return (
    <div className="flex gap-4 items-center">
      {metrics === "c" ? (
        <p className="md:text-xl">{current.temp_c}°C</p>
      ) : (
        <p className="md:text-xl">{current.temp_f}°F</p>
      )}

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
