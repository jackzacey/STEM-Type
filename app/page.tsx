// app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CourseSelector from '@/components/CourseSelector';
import { type CourseId } from '@/data/courses';

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState<CourseId | null>(null);

  const handleStart = () => {
  if (selected) {
    router.push(`/unit/${selected}`);  // ← THIS LINE CHANGED
  }
};

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8 gap-16">
      <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest">
        STEM TYPE
      </h1>

      <CourseSelector selected={selected} setSelected={setSelected} />

      {selected && (
        <button
          onClick={handleStart}
          className="glass glass-hover px-12 py-20 text-5xl md:text-7xl font-black 
           text-cyan-400 tracking-wider text-center shadow-2xl"
        >
          START TYPING
        </button>
      )}
    </main>
  );
}
