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
      {/* Course Title */}
      <h1 className="text-7xl md:text-9xl font-bold text-white tracking-widest text-center">
        {displayName}
      </h1>

      {/* Units — huge centered buttons with Unit # */}
      <div className="flex flex-col items-center gap-12 w-full max-w-3xl">
        {units.map((unit, index) => (
          <Link
            key={unit}
            href={`/unit/${courseId}/${encodeURIComponent(unit)}`}
            className="group relative w-full px-16 py-20 
                       bg-gradient-to-b from-gray-900 to-black 
                       border-4 border-gray-700 rounded-3xl
                       text-center overflow-hidden
                       transition-all duration-500 hover:scale-105 hover:border-cyan-500"
          >
            <div className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-black text-cyan-400 mb-3">
                Unit {index + 1}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {unit.replace(/^Unit \d+:\s*/, '')}
              </div>
            </div>

            <div className="absolute inset-0 border-4 border-transparent rounded-3xl 
                            group-hover:border-cyan-400 transition-all duration-500 
                            translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" 
            />
          </Link>
        ))}
      </div>

      {/* Back button */}
      <Link href="/" className="mt-12 text-2xl text-gray-400 hover:text-cyan-400 underline">
        ← Back to courses
      </Link>
    </main>
  );
}
