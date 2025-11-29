// components/TypingEngine.tsx
import TypingDisplay from './TypingDisplay';
import { useTypingTest } from './useTypingTest';
import { Term } from '@/data/terms';
import { type CourseId } from '@/data/courses';

// ADD THIS LINE — receives courseId from the page
interface Props {
  terms: Term[];
  courseId: CourseId;   // ← THIS WAS MISSING
}

export default function TypingEngine({ terms, courseId }: Props) {
  const { term, chars, states, cursor, extra, isPerfect, wpm, accuracy, elapsed } = useTypingTest(terms);

  if (!term) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white text-6xl">
        ALL DONE
      </div>
    );
  }

  return (
    <TypingDisplay
      courseId={courseId}           // ← now it exists
      term={term.definition}
      chars={chars}
      states={states}
      cursor={cursor}
      extra={extra}
      isPerfect={isPerfect}
      wpm={wpm}
      accuracy={accuracy}
      elapsed={elapsed}
    />
  );
}
