
export default function ContentPresentation({ weatherData, localTime }) {
  return (
    <section className="flex sm:items-center sm:text-center flex-col gap-4 text-white">
    <h1 className="text-2xl font-bold uppercase sm:text-center mb-4">Aujourd'hui à {weatherData.location.name} :</h1>
    <p >
      {weatherData.location.name} est une ville qui se trouve dans la
      région {weatherData.location.region} en{" "}
      {weatherData.location.country}.  Ca position exacte Longitude / Latitude est{" "}
      {weatherData.location.lon} / {weatherData.location.lat}.
    </p>
    
    <p>
      Nous sommes le {localTime[0]} et l&apos;heure locale est {localTime[1]}.
    </p>
  </section>
  )
}
