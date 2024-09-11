import { useState } from "react";
import { GiWindsock } from "react-icons/gi";
import MoreInformationCardsSelectWindMetrics from "./WindsCard-SelectWindMetrics";
export default function WindsCards({ current }) {
  const [windMetrics, setWindMetrics] = useState("kph");

  const handleChangeWindMetrics = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setWindMetrics(value);
  };

  return (
    <div className="flex flex-col text-white items-center justify-between text-center rounded-xl bg-white bg-opacity-10 w-full sm:w-[40%] p-4">
      <h2 className="text-lg mb-4">Vitesse des vents :</h2>
      <div className="flex flex-col items-center justify-between">
      <MoreInformationCardsSelectWindMetrics
        current={current}
        handleChangeWindMetrics={handleChangeWindMetrics}
        windMetrics={windMetrics}
      />
         <GiWindsock size={50} color="white" className="m-5"/>
    </div>
    </div>
  );
}
