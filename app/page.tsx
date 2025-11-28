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
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-black text-white mb-20 tracking-tight">
          Select a Course
        </h1>

        <CourseSelector
          courses={courses}
          selected={selected}
          setSelected={(c: Course) => {
            setSelected(c);
            router.push(`/course/${c}`);
          }}
        />
      </div>
    </main>
  );
}
