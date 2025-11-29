// Probably in components/CourseSelector.tsx or a types file
import { COURSES } from '@/data/courses';

export type CourseId = keyof typeof COURSES;  // ← this is the new correct type
  courses,
  selected,
  setSelected,
}: {
  courses: Course[];
  selected: Course;
  setSelected: (c: Course) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl">
      {courses.map((course) => (
        <button
          key={course}
          onClick={() => setSelected(course)}
          className={`
            px-16 py-24 text-5xl font-bold rounded-3xl border-4 transition-all duration-300
            hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50
            ${selected === course
              ? 'bg-cyan-600 border-cyan-400 text-white shadow-xl shadow-cyan-500/70'
              : 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-500'
            }
          `}
        >
          {course}
        </button>
      ))}
    </div>
  );
}
