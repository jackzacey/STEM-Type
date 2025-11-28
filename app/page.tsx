'use client';

import { allTerms, Course } from '@/data/terms';
import CourseSelector from '@/components/CourseSelector';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const courses: Course[] = [
  'FreshmanBio', 'SophomoreChem', 'APBio', 'APChem', 'APPhys',
  'APPhysC', 'APPhysMech', 'APES', 'APPhys2'
];

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState<Course>(courses[0]);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-8">
      <h1 className="text-white text-7xl md:text-8xl font-black mb-16 text-center">
        Select a Course
      </h1>
      <CourseSelector
        courses={courses}
        selected={selected}
        setSelected={(c) => {
          setSelected(c);
          router.push(`/course/${c}`);
        }}
      />
    </main>
  );
}
