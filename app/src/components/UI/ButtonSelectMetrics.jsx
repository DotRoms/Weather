export default function ButtonSelectMetrics({
  dataValueMetric,
  handlerChangeFunction,
  currentMetric,
  metrics,
}) {
  return (
    <button
      aria-label={`Changer pour ${metrics}`}
      className={`p-2 rounded-full ${
        currentMetric === dataValueMetric
          ? "border border-[#60a5fa] bg-[#60a5fa]"
          : "border border-[#60a5fa]"
      }`}
      data-value={dataValueMetric}
      onClick={handlerChangeFunction}
    >
      {metrics}
    </button>
  );
}
