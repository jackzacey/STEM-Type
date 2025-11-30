// components/TypingEngine.tsx
import TypingDisplay from './TypingDisplay';
import { useTypingTest } from './useTypingTest';
import { Term } from '@/data/terms';
import { type CourseId } from '@/data/courses';

interface Props {
  terms: Term[];
  courseId: CourseId;
}

export default function TypingEngine({ terms, courseId }: Props) {
  const { term, chars, states, cursor, extra, isPerfect, wpm, accuracy, elapsed } = useTypingTest(terms);

  if (!term) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="glass p-20 text-7xl font-black text-cyan-400 tracking-wider text-center">
          ALL DONE
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl">
      {/* Glass container for the entire typing area */}
      <div className="glass p-10 md:p-16 rounded-3xl shadow-3xl">
        <TypingDisplay
          courseId={courseId}
          term={term.term}
          definition={term.definition}
          chars={chars}
          states={states}
          cursor={cursor}
          extra={extra}
          isPerfect={isPerfect}
          wpm={wpm}
          accuracy={accuracy}
          elapsed={elapsed}
        />
      </div>
    </div>
  );
}
