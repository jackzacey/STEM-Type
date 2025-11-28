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
      <div className="text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-wide max-w-4xl text-left mb-8">
        {chars.map((char, idx) => {
          const isCursor = idx === cursor;
          return (
            <span
              key={idx}
              className={`char inline-block ${states[idx]} ${isCursor ? 'cursor' : ''}`}
              style={{ marginRight: char === ' ' ? '0.5em' : '0' }}
            >
              {char}
            </span>
          );
        })}
        {extra.split('').map((char, idx) => (
          <span key={`extra-${idx}`} className="char incorrect">{char}</span>
        ))}
        {cursor === chars.length && extra === '' && <span className="char cursor">&nbsp;</span>}
      </div>
      <div className="text-white text-xl md:text-2xl flex gap-8 justify-center">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Time: {elapsed}s</div>
      </div>
      {isPerfect && <div className="mt-4 text-3xl text-green-400">PERFECT ✅</div>}
    </div>
  );
}
