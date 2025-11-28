interface Props {
  term: string;
  chars: string[];
  states: ('untyped' | 'correct' | 'incorrect')[];
  cursor: number;
  extra: string;
  isPerfect: boolean;
  wpm: number;
  accuracy: number;
  elapsed: number;
}

export default function TypingDisplay({
  chars,
  states,
  cursor,
  extra,
  isPerfect,
  wpm,
  accuracy,
  elapsed,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8">
      {/* Your original big font + wraps downward beautifully */}
      <div className="text-5xl md:text-6xl lg:text-7xl font-medium leading-snug tracking-wider max-w-5xl text-center whitespace-pre-wrap break-words">
        {chars.map((char, i) => {
          const isCursor = i === cursor;
          return (
            <span
              key={i}
              className={`${states[i]} ${isCursor ? 'cursor' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {extra.split('').map((char, i) => (
          <span key={`extra-${i}`} className="incorrect">
            {char}
          </span>
        ))}
      </div>

      {/* Stats — centered */}
      <div className="mt-16 text-3xl text-gray-300 space-x-12">
        <span>WPM: <span className="text-cyan-400 font-bold">{wpm}</span></span>
        <span>Accuracy: <span className="text-cyan-400 font-bold">{accuracy}%</span></span>
        <span>Time: <span className="text-cyan-400 font-bold">{elapsed}s</span></span>
      </div>

      {isPerfect && (
        <div className="mt-12 text-6xl font-bold text-green-400 animate-pulse">
          PERFECT
        </div>
      )}
    </div>
  );
}
