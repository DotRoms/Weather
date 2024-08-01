
export default function Humidity({ location }) {
  return (
    <div className="flex flex-col w-full p-10 border-2 rounded-3xl border-blue-400 shadow-xl bg-yellow-200 bg-opacity-40 gap-4">
    <p className="text-2xl md:text-3xl text-center">
    Humidity: <span className="font-bold">{location.current.humidity}%</span>
    </p>
    <div className="flex flex-col justify-center items-center">

      <p className="text-xl p-2">Wind : <span className="font-bold">{location.current.wind_kph} km/h</span></p>
      <p className="text-xl p-2">Cloudy : <span className="font-bold">{location.current.cloud}%</span></p>
      <p className="text-xl p-2">	UV Index : <span className="font-bold">{location.current.uv}</span></p>
        
    </div>
    
  </div>
  )
}