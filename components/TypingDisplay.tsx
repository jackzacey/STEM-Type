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

export default function TypingDisplay({ term, chars, states, cursor, extra, isPerfect, wpm, accuracy, elapsed }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="typing-line text-4xl">
        {chars.map((char, idx) => {
          const isCursor = idx === cursor;
          return <span key={idx} className={`char ${states[idx]} ${isCursor ? 'cursor' : ''}`}>{char}</span>;
        })}
        {extra.split('').map((char, idx) => (
          <span key={`extra-${idx}`} className="char incorrect">{char}</span>
        ))}
        {cursor === chars.length && <span className="char cursor"> </span>}
      </div>
      <div className="mt-4 text-white text-2xl flex gap-8">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Time: {elapsed}s</div>
      </div>
      {isPerfect && <div className="mt-4 text-3xl text-green-400">PERFECT</div>}
    </div>
  );
}
