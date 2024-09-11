import ButtonSelectMetrics from "../../../UI/ButtonSelectMetrics";

export default function WindsCardsSelectWindMetrics({
  windMetrics,
  handleChangeWindMetrics,
  current,
}) {
  return (
    <div className="flex gap-4 items-center ">
      {windMetrics === "kph" ? (
        <p className="md:text-xl">{current.wind_kph} km/h</p>
      ) : (
        <p className="md:text-xl">{current.wind_mph} m/h</p>
      )}
      <ul className="flex gap-2">
        <li>
          <ButtonSelectMetrics
            dataValueMetric="kph"
            handlerChangeFunction={handleChangeWindMetrics} // Pas besoin d'envelopper ici
            currentMetric={windMetrics}
            metrics="km/h"
          />
        </li>

        <li>
          <ButtonSelectMetrics
            dataValueMetric="mph"
            handlerChangeFunction={handleChangeWindMetrics} // Pas besoin d'envelopper ici
            currentMetric={windMetrics}
            metrics="m/h"
          />
        </li>
      </ul>
    </div>
  );
}
