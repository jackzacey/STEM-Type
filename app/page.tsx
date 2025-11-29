// app/page.tsx
'use client';

import { useState } from 'react';
import CourseSelector from '@/components/CourseSelector';
import { type CourseId } from '@/data/courses';
import { COURSES } from '@/data/courses';

export default function Home() {
  const [selected, setSelected] = useState<CourseId | null>(null);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-widest">
        STEM TYPE
      </h1>

      <CourseSelector selected={selected} setSelected={setSelected} />

      {selected && (
        <div className="mt-16">
          <p className="text-3xl text-cyan-400">
            Selected: {selected.replace(/-/g, ' ').toUpperCase()}
          </p>
        </div>
      )}
    </main>
  );
}
