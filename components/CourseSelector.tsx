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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
      {courses.map((course) => (
        <button
          key={course}
          onClick={() => setSelected(course)}
          className={`
            relative px-12 py-12 text-4xl md:text-5xl font-bold rounded-3xl border-4
            transition-all duration-500 transform hover:-translate-y-4
            ${selected === course
              ? 'bg-cyan-500/40 border-cyan-300 text-white shadow-[0_0_60px_rgba(34,211,238,0.8)] scale-110'
              : 'bg-white/5 backdrop-blur-sm border-gray-500 text-gray-200 hover:bg-white/10 hover:border-gray-300'
            }
          `}
        >
          {course}
          {selected === course && (
            <div className="absolute inset-0 rounded-3xl animate-ping bg-cyan-500/20 pointer-events-none" />
          )}
        </button>
      ))}
    </div>
  );
}
