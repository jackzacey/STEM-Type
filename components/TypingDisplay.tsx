// components/TypingDisplay.tsx
interface Props {
  term?: string;          // ← added back
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
  term,                   // ← now accepted
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
    <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
      {/* Typing area — wraps perfectly */}
      <div className="text-4xl md:text-5xl lg:text-6xl leading-snug tracking-tight text-left whitespace-pre-wrap break-words font-medium my-20">
        {chars.map((char, i) => {
          const isCursor = i === cursor;
          return (
            <span
              key={i}
              className={`relative inline-block ${states[i]} ${
                isCursor ? 'after:content-["|"] after:animate-ping after:absolute after:text-white after:-ml-1' : ''
              }`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {extra.split('').map((char, i) => (
          <span key={`extra-${i}`} className="incorrect relative inline-block">
            {char}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-12 text-2xl font-light text-gray-300">
        <div>WPM: <span className="text-cyan-400 font-bold">{wpm}</span></div>
        <div>Acc: <span className="text-cyan-400 font-bold">{accuracy}%</span></div>
        <div>Time: <span className="text-cyan-400 font-bold">{elapsed}s</span></div>
      </div>

      {isPerfect && (
        <div className="mt-12 text-6xl font-bold text-green-400 animate-pulse">
          PERFECT
        </div>
      )}
    </div>
  );
}
