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
  term,
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
    <div className="flex flex-col items-center justify-start min-h-screen px-8 pt-32">
      {/* MASSIVE, SOFT, MONKEYTYPE-STYLE TEXT */}
      <div className="typing-line text-8xl md:text-9xl lg:text-10xl font-medium leading-snug tracking-wider text-center break-words">
        {chars.map((char, idx) => {
          const isCursor = idx === cursor;
          return (
            <span
              key={idx}
              className={`char relative inline-block ${states[idx]} ${isCursor ? 'cursor' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {extra.split('').map((char, idx) => (
          <span key={`extra-${idx}`} className="char incorrect relative inline-block">
            {char}
          </span>
        ))}
      </div>

      {/* Clean centered stats */}
      <div className="mt-16 text-4xl text-gray-400 space-x-16 font-light">
        <span>WPM: <span className="text-white font-bold">{wpm}</span></span>
        <span>Accuracy: <span className="text-white font-bold">{accuracy}%</span></span>
        <span>Time: <span className="text-white font-bold">{elapsed}s</span></span>
      </div>

      {/* PERFECT message */}
      {isPerfect && (
        <div className="mt-20 text-9xl font-black text-green-400 animate-pulse tracking-widest">
          PERFECT
        </div>
      )}
    </div>
  );
}
