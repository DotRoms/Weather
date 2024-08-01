export default function Location({ location }) {
  const time = location.location.localtime;
  const newTime = time.split(" ")[1];

  return (
    <div className="flex flex-col w-full  p-10 border-2 rounded-3xl border-blue-400 shadow-xl bg-white bg-opacity-50 gap-4">
      <h1 className="font-bold text-2xl md:text-3xl text-center">
        Actually in {location.location.name}
      </h1>
      <p className="text-xl md:text-2xl text-center">
        {location.location.name} is in the {location.location.region} region of{" "}
        {location.location.country}
      </p>
      <p className="text-center text-xl">The time is now <span className="font-bold">{newTime}</span></p>
    </div>
  );
}
