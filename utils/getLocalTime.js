export const getLocalTime = (localTime) => {
  const date = localTime.split(" ")[0];
  const newDate = date.split("-").reverse().join("-");
  const time = localTime.split(" ")[1];

  return [newDate, time];
};
