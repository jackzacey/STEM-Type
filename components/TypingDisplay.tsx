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
    <div className="flex flex-col items-center max-w-4xl mx-auto px-8">
      {/* YOUR ORIGINAL CODE — JUST MADE 3× BIGGER */}
      <div className="typing-line text-8xl md:text-9xl font-medium leading-snug tracking-wider my-32">
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

      {/* Your original stats — just centered */}
      <div className="mt-8 text-white text-3xl flex gap-16 font-light">
        <div>WPM: <span className="font-bold text-cyan-400">{wpm}</span></div>
        <div>Accuracy: <span className="font-bold text-cyan-400">{accuracy}%</span></div>
        <div>Time: <span className="font-bold text-cyan-400">{elapsed}s</span></div>
      </div>

      {isPerfect && (
        <div className="mt-16 text-8xl font-bold text-green-400 animate-pulse">
          PERFECT
        </div>
      )}
    </div>
  );
}
