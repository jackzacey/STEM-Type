// components/TypingDisplay.tsx
import { type CourseId } from '@/data/courses';

interface Props {
  term: string;
  definition: string;     // ← NEW: we now receive the full definition text
  chars: string[];
  states: ('untyped' | 'correct' | 'incorrect')[];
  cursor: number;
  extra: string;
  isPerfect: boolean;
  wpm: number;
  accuracy: number;
  elapsed: number;
  courseId: CourseId;
}

export default function TypingDisplay({
  term,
  definition,
  chars,
  states,
  cursor,
  extra,
  isPerfect,
  wpm,
  accuracy,
  elapsed,
  courseId,
}: Props) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black pt-20 px-8">
      
      {/* THE BIG TERM NAME — this is what you wanted */}
      <h2 className="text-6xl md:text-8xl font-bold text-cyan-400 tracking-wider mb-12 text-center leading-tight">
        {term}
      </h2>

      {/* Your legendary massive typing line */}
      <div className="typing-line text-8xl my-8">
        {chars.map((char, idx) => {
          const isCursor = idx === cursor;
          return (
            <span key={idx} className={`char ${states[idx]} ${isCursor ? 'cursor' : ''}`}>
              {char}
            </span>
          );
        })}
        {extra.split('').map((char, idx) => (
          <span key={idx} className="char incorrect cursor">
            {char}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 text-white text-2xl flex gap-10">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Time: {elapsed}s</div>
      </div>

      {isPerfect && (
        <div className="mt-6 text-4xl text-green-400 font-bold">PERFECT</div>
      )}
    </div>
  );
}
