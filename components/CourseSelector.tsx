// components/CourseSelector.tsx
'use client';

import { COURSES } from '@/data/courses';

// This is the new correct type — replaces the old Course union
export type CourseId = keyof typeof COURSES;

type Props = {
  selected: CourseId | null;
  setSelected: (c: CourseId) => void;
};

export default function CourseSelector({ selected, setSelected }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl">
      {Object.entries(COURSES).map(([courseId, config]) => {
        const displayName = courseId
          .replace(/-/g, ' ')           // "ap-biology" → "ap biology"
          .replace(/\b\w/g, l => l.toUpperCase()) // capitalize
          .replace('Ap ', 'AP ')        // fix "Ap" → "AP"
          .replace('C Mech', 'C: Mechanics')
          .replace('C Em', 'C: E&M');

        return (
          <button
            key={courseId}
            onClick={() => setSelected(courseId as CourseId)}
            className={`
              px-16 py-24 text-5xl font-bold rounded-3xl border-4 transition-all duration-300
              hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50
              ${selected === courseId
                ? 'bg-cyan-600 border-cyan-400 text-white shadow-xl shadow-cyan-500/70'
                : 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-500'
              }
            `}
          >
            {displayName}
          </button>
        );
      })}
    </div>
  );
}
