// app/unit/[course]/[unit]/page.tsx
'use client';

import { allTerms } from '@/data/terms';
import TypingEngine from '@/components/TypingEngine';
import { type CourseId } from '@/data/courses';

export default function UnitPage({ params }: { params: { course: string; unit: string } }) {
  const courseId = params.course as CourseId;
  const rawUnit = params.unit;
  const unit = decodeURIComponent(rawUnit); // ← THIS FIXES %20 → space

  const displayCourse = courseId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace('Ap ', 'AP ');

  const termsForUnit = allTerms.filter(t => t.course === courseId && t.unit === unit);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-16">
      <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider text-center px-8">
        {displayCourse} — {unit}
      </h1>
      <TypingEngine terms={termsForUnit} courseId={courseId} />
    </main>
  );
}
