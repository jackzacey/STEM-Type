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
    <main className="min-h-screen flex flex-col items-center justify-center gap-16 px-8">
      <h1 className="text-7xl md:text-9xl font-black text-white tracking-widest text-center">
        {displayName}
      </h1>

      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        {units.map((unit, index) => (
          <Link
            key={unit}
            href={`/unit/${courseId}/${encodeURIComponent(unit)}`}
            className="glass w-full px-12 py-16 rounded-3xl text-center
                       transform transition-all duration-300
                       hover:scale-[1.04] hover:shadow-2xl
                       active:scale-[0.98] cursor-pointer
                       border border-gray-700/50"
          >
            <div className="text-6xl md:text-7xl font-black text-cyan-400 mb-3 tracking-wider">
              Unit {index + 1}
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-100">
              {unit.replace(/^Unit \d+:\s*/, '')}
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" className="mt-12 text-xl text-gray-500 hover:text-cyan-400 transition-colors underline">
        ← Back to courses
      </Link>
    </main>
  );
}
