
import Image from "next/image"
export default function GeneralInformations({ location }) {
  return (
    <div className="flex flex-col w-full p-10 border-2 rounded-3xl border-blue-400 shadow-xl bg-white bg-opacity-50 gap-4">
    <p className="text-2xl md:text-3xl text-center">
      Temperature: <span className="font-bold">{location.current.temp_c}°C</span>
    </p>
    <div className="flex justify-center items-center gap-4">
      <p className="text-xl font-bold p-2">The sky is <br /> currently {location.current.condition.text}</p>
      <figure className="p-2 border border-white rounded-3xl bg-blue-400 bg-opacity-50">
        
      <Image src={`https:${location.current.condition.icon}`} width={100} height={100} alt="Icon meteo"/>
      </figure>
    </div>
    
  </div>
  )
}