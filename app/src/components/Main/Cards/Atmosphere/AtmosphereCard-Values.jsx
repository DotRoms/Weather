import { FaSun } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";

export default function AtmosphereCardHumidity({current}) {
  return (
    <div className="flex flex-col gap-4 md:text-xl">
      <p className="flex items-center gap-2"><FaDroplet size={20} color="#60a5fa"/>{current.humidity} %</p>
      <p className="flex items-center gap-2"><IoIosCloud size={20} color="#60a5fa"/>{current.cloud} %</p>
      <p className="flex items-center gap-2"><FaSun size={20} color="#60a5fa"/>{current.uv} Uv</p>
  </div>
  )
}
