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
    <div className="min-h-screen bg-black flex flex-col items-center pt-24 px-8">
      {/* HUGE, SOFT MONKEYTYPE TEXT */}
      <div className="typing-line text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] 2xl:text-[16rem] font-medium leading-tight tracking-widest break-words text-center">
        {chars.map((char, i) => {
          const isCursor = i === cursor;
          return (
            <span key={i} className={`relative ${states[i]} ${isCursor ? 'cursor' : ''}`}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {extra.split('').map((char, i) => (
          <span key={`extra-${i}`} className="relative incorrect">
            {char}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-20 text-4xl text-gray-400 space-x-16 font-light">
        <span>WPM: <span className="text-white font-bold">{wpm}</span></span>
        <span>Accuracy: <span className="text-white font-bold">{accuracy}%</span></span>
        <span>Time: <span className="text-white font-bold">{elapsed}s</span></span>
      </div>

      {/* PERFECT – normal size */}
      {isPerfect && (
        <div className="mt-24 text-9xl lg:text-[12rem] font-black text-green-400 animate-pulse tracking-widest">
          PERFECT
        </div>
      )}
    </div>
  );
}
