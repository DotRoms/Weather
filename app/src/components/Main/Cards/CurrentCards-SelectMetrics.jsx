
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";

export default function CurrentCardsSelectMetrics({current, metrics, handleChangeMetrics}) {
  return (
    <div className="flex gap-4 items-center">
         
    {metrics === "c" ? (
      <p className="text-xl">{current.temp_c}°C</p>
    ) : (
      <p className="text-xl">{current.temp_f}°F</p>
    )}

    <ul className="flex gap-2">
      <li>
        <button
          aria-label="Changer pour Fahrenheit"
          className={`p-2 rounded-full ${
            metrics === "f" ? "border border-blue-500 bg-blue-500" : "border border-blue-500"
          }`}
          data-value="f"
          onClick={handleChangeMetrics}
        >
          <RiFahrenheitFill />
        </button>
      </li>
      <li>
        <button
          aria-label="Changer pour Celsius"
          className={`p-2 rounded-full ${
            metrics === "c" ? "border border-blue-500 bg-blue-500" : "border border-blue-500"
          }`}
          data-value="c"
          onClick={handleChangeMetrics}
        >
          <RiCelsiusFill />
        </button>
      </li>
    </ul>
  </div>
  )
}
