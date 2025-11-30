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
      {/* Course Title */}
      <h1 className="text-7xl md:text-9xl font-black text-white tracking-widest text-center">
        {displayName}
      </h1>

      {/* Units — Graphite Glass cards */}
      <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
        {units.map((unit, index) => (
          <Link
            key={unit}
            href={`/unit/${courseId}/${encodeURIComponent(unit)}`}
            className="glass w-full px-16 py-20 text-center group relative overflow-hidden
                       transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
          >
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Unit Number */}
            <div className="text-6xl md:text-7xl font-black text-cyan-400 mb-3 tracking-wider">
              Unit {index + 1}
            </div>

            {/* Unit Title */}
            <div className="text-4xl md:text-5xl font-bold text-gray-100 tracking-wide">
              {unit.replace(/^Unit \d+:\s*/, '')}
            </div>

            {/* Floating border glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent 
                            group-hover:border-cyan-400/60 
                            translate-x-3 translate-y-3 
                            group-hover:translate-x-0 group-hover:translate-y-0 
                            transition-all duration-500 pointer-events-none" 
            />
          </Link>
        ))}
      </div>

      {/* Back button */}
      <Link href="/" className="mt-12 text-xl text-gray-500 hover:text-cyan-400 transition-colors underline">
        ← Back to courses
      </Link>
    </main>
  );
}
