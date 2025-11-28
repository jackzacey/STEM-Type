// components/CourseSelector.tsx
import { Course } from '@/data/terms';

export default function CourseSelector({
  courses,
  selected,
  setSelected,
}: {
  courses: Course[];
  selected: Course;
  setSelected: (c: Course) => void;
}) {
  return (
    <div className="flex flex-wrap gap-6 justify-center max-w-5xl">
      {courses.map(course => (
        <button
          key={course}
          onClick={() => setSelected(course)}
          className={`
            px-10 py-6 text-2xl font-medium rounded-2xl border-4 transition-all duration-300
            ${selected === course
              ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-2xl shadow-cyan-500/50 scale-110'
              : 'bg-white/5 border-gray-600 text-gray-300 hover:bg-white/10 hover:border-gray-400 hover:scale-105'
            }
          `}
        >
          {course}
        </button>
      ))}
    </div>
  );
}
