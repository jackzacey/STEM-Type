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
      <div className="flex min-h-screen items-center justify-center text-white text-6xl font-bold">
        ALL DONE
      </div>
    );
  }

  return (
    <TypingDisplay
      courseId={courseId}
      term={term.term}           // ← NOW SENDS THE TERM NAME (e.g. "Hydrophilic")
      definition={term.definition} // ← the text you're typing
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
