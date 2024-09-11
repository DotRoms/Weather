import Image from "next/image";
import { useState } from "react";
import CurrentCardsSelectMetrics from "./CurrentCard-SelectMetrics";

export default function CurrentCards({ current }) {
  const [metrics, setMetrics] = useState("c");

  const handleChangeMetrics = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    setMetrics(value);
  };


  return (
    <div className="flex flex-col text-white items-center justify-between text-center rounded-xl bg-white bg-opacity-10 w-full sm:w-[40%] p-4">
      <h2 className="text-lg mb-4">Condition météo actuelle :</h2>
      <div className="flex flex-col items-center justify-between">

        <CurrentCardsSelectMetrics
          metrics={metrics}
          handleChangeMetrics={handleChangeMetrics}
          current={current}
        />

        <Image
          src={`https:${current.condition.icon}`}
          width={100}
          height={100}
          alt={current.condition.text}
        />
      </div>
    </div>
  );
}
