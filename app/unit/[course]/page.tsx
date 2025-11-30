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
      <h1 className="text-7xl md:text-9xl font-bold text-white tracking-widest">
        {displayName}
      </h1>

      <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
        {units.map((unit, index) => (
          <Link
            key={unit}
            href={`/unit/${courseId}/${encodeURIComponent(unit)}`}
            className="group relative w-full px-20 py-20 
                       bg-gradient-to-br from-gray-900 via-gray-800 to-black
                       rounded-3xl border-4 border-gray-700
                       shadow-2xl overflow-hidden
                       transform transition-all duration-500
                       hover:scale-105 hover:border-cyan-500 hover:shadow-cyan-500/50"
          >
            {/* Glowing background on hover */}
            <div className="absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            
            {/* Unit Number */}
            <div className="text-6xl md:text-7xl font-black text-cyan-400 mb-4 tracking-wider">
              Unit {index + 1}
            </div>
            
            {/* Unit Title */}
            <div className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              {unit.replace(/^Unit \d+:\s*/, '')}
            </div>

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-3xl border-4 border-transparent 
                            group-hover:border-cyan-400 
                            translate-x-4 translate-y-4 
                            group-hover:translate-x-0 group-hover:translate-y-0 
                            transition-all duration-500" 
            />
          </Link>
        ))}
      </div>

      <Link href="/" className="mt-16 text-2xl text-gray-400 hover:text-cyan-400 underline">
        ← Back to courses
      </Link>
    </main>
  );
}
