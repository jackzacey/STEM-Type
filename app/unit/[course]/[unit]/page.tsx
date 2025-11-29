// app/unit/[course]/[unit]/page.tsx
'use client';

import { allTerms } from '@/data/terms';
import TypingEngine from '@/components/TypingEngine';
import { type CourseId } from '@/data/courses';

interface Props {
  params: { course: string; unit: string };
}

export default function UnitPage({ params }: Props) {
  const { course, unit } = params;

  // Safely cast course to CourseId (all your AP courses are valid)
  const courseId = course as CourseId;

  // Filter terms for this unit
  const termsForUnit = allTerms.filter(
    (t) => t.course === courseId && t.unit === unit
  );

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-6xl my-8 text-white">
        {course.replace(/-/g, ' ').toUpperCase()} — {unit}
      </h1>
      <TypingEngine 
        terms={termsForUnit} 
        courseId={courseId}   // THIS LINE WAS MISSING
      />
    </main>
  );
}
