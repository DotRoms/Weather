import AtmosphereCardValues from "./AtmosphereCard-Values";
export default function AtmosphereCards({ current }) {


  return (
    <div className="flex flex-col text-white items-center justify-between text-center rounded-xl bg-white bg-opacity-10 w-full sm:w-[40%] p-4">
      <h2 className="text-lg mb-4">Atmosphère :</h2>
      <div className="flex flex-col items-center">

        <AtmosphereCardValues current={current} />
     
    </div>
    </div>
  );
}
