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
    <div className="min-h-screen bg-black flex flex-col items-center pt-24 pb-32 px-8">
      {/* TOP-MIDDLE + HUGE SOFT MONKEYTYPE FONT */}
      <div className="w-full max-w-7xl text-left">
        <div className="typing-line text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-medium leading-tight tracking-wider break-words">
          {chars.map((char, i) => {
            const isCursor = i === cursor;
            return (
              <span
                key={i}
                className={`relative inline-block ${states[i]} ${isCursor ? 'cursor' : ''}`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
          {extra.split('').map((char, i) => (
            <span key={`extra-${i}`} className="relative inline-block incorrect">
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Stats – fixed at bottom */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-4xl text-gray-400 space-x-16 font-light">
        <span>WPM: <span className="text-white font-bold">{wpm}</span></span>
        <span>Accuracy: <span className="text-white font-bold">{accuracy}%</span></span>
        <span>Time: <span className="text-white font-bold">{elapsed}s</span></span>
      </div>

      {/* PERFECT message */}
      {isPerfect && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-9xl md:text-[12rem] font-black text-green-400 animate-pulse tracking-widest">
            PERFECT
          </div>
        </div>
      )}
    </div>
  );
}
