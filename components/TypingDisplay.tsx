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
    <div className="flex flex-col items-center min-h-screen bg-black pt-32 px-8">
      {/* YOUR OLD WINNING MASSIVE FONT + VERTICAL WRAP */}
      <div className="typing-line text-8xl my-8">
        {chars.map((char, idx) => {
          const isCursor = idx === cursor;
          return <span key={idx} className={`char ${states[idx]} ${isCursor ? 'cursor' : ''}`}>{char}</span>;
        })}
        {extra.split('').map((char, idx) => (
          <span key={idx} className="char incorrect cursor">{char}</span>
        ))}
      </div>
      <div className="mt-4 text-white text-2xl flex gap-8">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Time: {elapsed}s</div>
      </div>
      {isPerfect && <div className="mt-4 text-3xl text-green-400">PERFECT ✅</div>}
    </div>
  );
}
