// app/unit/[course]/page.tsx
'use client';

import { COURSES } from '@/data/courses';
import { type CourseId } from '@/data/courses';
import Link from 'next/link';

export default function UnitSelector({ params }: { params: { course: string } }) {
  const courseId = params.course as CourseId;
  const units = COURSES[courseId]?.units || [];

  const displayName = courseId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace('Ap ', 'AP ')
    .replace('C Mech', 'C: Mechanics')
    .replace('C Em', 'C: E&M');

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-20 px-8">
      <h1 className="text-7xl md:text-9xl font-bold text-white tracking-widest">
        {displayName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl w-full">
        {units.map((unit) => (
          <Link
            key={unit}
            href={`/unit/${courseId}/${encodeURIComponent(unit)}`}
            className="px-10 py-14 text-3xl md:text-4xl font-bold text-center bg-gray-900 border-4 border-gray-700 rounded-3xl text-cyan-400 hover:bg-cyan-900 hover:border-cyan-500 hover:scale-105 hover:text-white transition-all duration-300 shadow-2xl"
          >
            {unit}
          </Link>
        ))}
      </div>

      <Link href="/" className="text-2xl text-gray-400 hover:text-cyan-400 underline">
        ← Back to courses
      </Link>
    </main>
  );
}
