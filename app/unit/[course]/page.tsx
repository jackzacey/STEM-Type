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
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-16 px-8">
      <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest">
        {displayName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
        {units.map((unit) => (
          <Link
            key={unit}
            href={`/unit/${courseId}/${encodeURIComponent(unit)}`}
            className="px-12 py-16 text-4xl font-bold text-center bg-gray-900 border-4 border-gray-700 rounded-3xl text-white hover:bg-cyan-900 hover:border-cyan-500 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            {unit}
          </Link>
        ))}
      </div>

      <Link href="/" className="text-2xl text-gray-400 underline">
        ← Back to courses
      </Link>
    </main>
  );
}
