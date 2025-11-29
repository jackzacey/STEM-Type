// app/typing/[courseId]/page.tsx
import TypingDisplay from '@/components/TypingDisplay';
import { COURSES } from '@/data/courses';

export default function TypingPage({ params }: { params: { courseId: string } }) {
  const courseId = params.courseId as keyof typeof COURSES;

  if (!COURSES[courseId]) {
    return <div className="text-white text-4xl">Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <TypingDisplay courseId={courseId} />
    </div>
  );
}
