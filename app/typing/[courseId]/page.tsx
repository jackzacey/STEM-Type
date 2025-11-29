// app/typing/[courseId]/page.tsx
import TypingDisplay from '@/components/TypingDisplay';
import { type CourseId } from '@/data/courses';

export default function TypingPage({ params }: { params: { courseId: string } }) {
  const courseId = params.courseId as CourseId;

  return (
    <div className="min-h-screen bg-black">
      <TypingDisplay
        courseId={courseId}
        term="Unit selection coming soon!"
        chars={'Select a unit to start typing AP terms'.split('')}
        states={Array('Select a unit to start typing AP terms'.length).fill('untyped') as any}
        cursor={0}
        extra=""
        isPerfect={false}
        wpm={0}
        accuracy={100}
        elapsed={0}
      />
    </div>
  );
}
