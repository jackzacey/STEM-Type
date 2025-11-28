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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
      {courses.map((course) => (
        <button
          key={course}
          onClick={() => setSelected(course)}
          className={`
            px-16 py-20 text-5xl font-bold rounded-3xl border-4
            transition-all duration-300 hover:scale-110 hover:shadow-2xl
            ${selected === course
              ? 'bg-cyan-500/40 border-cyan-400 text-white shadow-cyan-500/50'
              : 'bg-white/10 border-gray-600 text-gray-200 hover:bg-white/20 hover:border-gray-400'
            }
          `}
        >
          {course}
        </button>
      ))}
    </div>
  );
}
