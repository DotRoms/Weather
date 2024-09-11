
import { FiSunrise, FiSunset } from "react-icons/fi";
import { WiMoonrise, WiMoonset } from "react-icons/wi";
export default function ForecastCardAstro({astro}) {
  return (
    <div className="flex gap-8 items-center bg-white p-4 rounded-xl bg-opacity-10 xl:w-full justify-center lg:flex-col xl:flex-row">

      <p className="flex flex-col gap-2 items-center"><FiSunrise color="#F29E14" size={35} className="p-1"/><span className="font-bold">{astro.sunrise.split(' ')[0]}H</span></p>
      <p className="flex flex-col gap-2 items-center"><FiSunset color="#F29E14" size={35} className="p-1"/><span className="font-bold">{astro.sunset.split(' ')[0]}H</span></p>
      <p className="flex flex-col gap-2 items-center"><WiMoonrise color="#e6efc7"  size={35}/><span className="font-bold">{astro.moonrise.split(' ')[0]}H</span></p>
      <p className="flex flex-col gap-2 items-center"><WiMoonset color="#e6efc7"  size={35}/><span className="font-bold">{astro.moonset.split(' ')[0]}H</span></p>
</div>
  )
}
