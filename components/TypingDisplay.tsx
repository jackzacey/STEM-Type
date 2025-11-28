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
      {/* 2× BIGGER FONT — one line only, no scroll, no wrap */}
      <div className="text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight whitespace-nowrap overflow-hidden">
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

      {/* Stats — big and centered */}
      <div className="mt-12 text-4xl text-gray-300 space-x-16">
        <span>WPM: <span className="text-cyan-400 font-black">{wpm}</span></span>
        <span>Acc: <span className="text-cyan-400 font-black">{accuracy}%</span></span>
        <span>Time: <span className="text-cyan-400 font-black">{elapsed}s</span></span>
      </div>

      {isPerfect && (
        <div className="mt-16 text-8xl font-black text-green-400 animate-pulse">
          PERFECT
        </div>
      )}
    </div>
  );
}
