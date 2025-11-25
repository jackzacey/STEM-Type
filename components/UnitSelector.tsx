export default function UnitSelector({
  units,
  selected,
  setSelected,
}: {
  units: string[];
  selected: string;
  setSelected: (u: string) => void;
}) {
  if (units.length === 0) return <div>No units available</div>;

  return (
    <div className="flex flex-wrap gap-4 justify-center my-4">
      {units.map(unit => (
        <button
          key={unit}
          onClick={() => setSelected(unit)}
          className={`px-6 py-3 rounded-xl border-2 ${
            selected === unit ? 'bg-cyan-500/20 border-cyan-400 text-white' : 'border-gray-400 text-gray-300'
          }`}
        >
          {unit}
        </button>
      ))}
    </div>
  );
}
