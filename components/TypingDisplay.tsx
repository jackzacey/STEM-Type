// components/TypingDisplay.tsx
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
    <div className="min-h-screen bg-black px-8 pt-20 pb-32 flex flex-col items-center">
      {/* TOP MIDDLE + EXACT MONKEYTYPE FONT & SIZE YOU LOVED */}
      <div className="typing-line text-8xl md:text-9xl lg:text-[11rem] font-medium leading-tight tracking-widest text-center break-words max-w-6xl">
        {chars.map((char, i) => {
          const isCursor = i === cursor;
          return (
            <span
              key={i}
              className={`char ${states[i]} ${isCursor ? 'cursor' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {extra.split('').map((char, i) => (
          <span key={`extra-${i}`} className="char incorrect">
            {char}
          </span>
        ))}
      </div>

      <div className="mt-20 text-4xl text-gray-400 space-x-16 font-light">
        <span>WPM: <span className="text-white font-bold">{wpm}</span></span>
        <span>Accuracy: <span className="text-white font-bold">{accuracy}%</span></span>
        <span>Time: <span className="text-white font-bold">{elapsed}s</span></span>
      </div>

      {isPerfect && (
        <div className="mt-24 text-9xl font-black text-green-400 animate-pulse tracking-widest">
          PERFECT
        </div>
      )}
    </div>
  );
}
