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
  term, chars, states, cursor, extra, isPerfect, wpm, accuracy, elapsed,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-8 pt-32">
      {/* MASSIVE + wraps + breaks long words */}
      <div className="typing-line text-9xl md:text-10xl lg:text-[11rem] font-medium leading-tight tracking-wider">
        {chars.map((char, i) => {
          const isCursor = i === cursor;
          return (
            <span key={i} className={`char relative inline-block ${states[i]} ${isCursor ? 'cursor' : ''}`}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {extra.split('').map((char, i) => (
          <span key={`extra-${i}`} className="char incorrect relative inline-block">
            {char}
          </span>
        ))}
      </div>

      <div className="mt-16 text-4xl text-gray-400 space-x-16 font-light">
        <span>WPM: <span className="text-white font-bold">{wpm}</span></span>
        <span>Accuracy: <span className="text-white font-bold">{accuracy}%</span></span>
        <span>Time: <span className="text-white font-bold">{elapsed}s</span></span>
      </div>

      {isPerfect && (
        <div className="mt-20 text-9xl font-black text-green-400 animate-pulse tracking-widest">
          PERFECT
        </div>
      )}
    </div>
  );
}
