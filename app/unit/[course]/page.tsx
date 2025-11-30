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
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-12 px-8">
      {/* Course Title */}
      <h1 className="text-7xl md:text-9xl font-bold text-white tracking-widest">
        {displayName}
      </h1>

      {/* Units — one massive centered button per line */}
      <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
        {units.map((unit) => (
          <Link
            key={unit}
            href={`/unit/${courseId}/${encodeURIComponent(unit)}`}
            className="w-full max-w-2xl px-16 py-12 text-4xl md:text-5xl font-bold text-center
                       bg-gray-900 border-4 border-gray-700 rounded-3xl
                       text-cyan-400 hover:text-white
                       hover:bg-cyan-900 hover:border-cyan-500
                       hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50
                       transition-all duration-300"
          >
            {unit}
          </Link>
        ))}
      </div>

      {/* Back button */}
      <Link href="/" className="mt-10 text-2xl text-gray-400 hover:text-cyan-400 underline">
        ← Back to courses
      </Link>
    </main>
  );
}
