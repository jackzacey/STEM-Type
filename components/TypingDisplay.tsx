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
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* MONKEYTYPE EXACT STYLE */}
      <div className="font-mono text-6xl md:text-7xl lg:text-8xl leading-tight tracking-wider text-left max-w-5xl break-words whitespace-pre-wrap">
        {chars.map((char, i) => {
          const isCursor = i === cursor;
          return (
            <span
              key={i}
              className={`relative ${states[i]} ${isCursor ? 'after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-white after:animate-pulse' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {extra.split('').map((char, i) => (
          <span key={`extra-${i}`} className="incorrect relative">
            {char}
          </span>
        ))}
      </div>

      {/* Stats — MonkeyType style */}
      <div className="mt-12 flex gap-16 text-3xl font-medium text-gray-400">
        <div>wpm <span className="text-white font-bold">{wpm}</span></div>
        <div>acc <span className="text-white font-bold">{accuracy}%</span></div>
        <div>time <span className="text-white font-bold">{elapsed}s</span></div>
      </div>

      {isPerfect && (
        <div className="mt-10 text-6xl font-bold text-green-400 animate-bounce">
          perfect
        </div>
      )}
    </div>
  );
}
