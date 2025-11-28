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
      <div className="typing-line text-5xl leading-relaxed tracking-wider my-20">
        {chars.map((char, idx) => {
          const isCursor = idx === cursor;
          return (
            <span
              key={idx}
              className={`char relative inline-block ${
                states[idx]
              } ${isCursor ? 'cursor' : ''}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
        {/* Extra typed characters (red) */}
        {extra.split('').map((char, idx) => (
          <span key={`extra-${idx}`} className="char incorrect relative inline-block">
            {char}
          </span>
        ))}
        {/* Blinking cursor at end when finished */}
        {cursor >= chars.length && extra === '' && (
          <span className="char cursor inline-block w-1">\u00A0</span>
        )}
      </div>

      {/* Stats */}
      <div className="mt-8 text-white text-2xl flex gap-12 font-light">
        <div>WPM: <span className="font-bold text-cyan-400">{wpm}</span></div>
        <div>Acc: <span className="font-bold text-cyan-400">{accuracy}%</span></div>
        <div>Time: <span className="font-bold text-cyan-400">{elapsed}s</span></div>
      </div>

      {isPerfect && (
        <div className="mt-12 text-5xl font-bold text-green-400 animate-pulse">
          PERFECT
        </div>
      )}
    </div>
  );
}
