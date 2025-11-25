'use client';
import { allTerms, Course } from '../data/terms';
import CourseSelector from './components/CourseSelector';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const courses: Course[] = [
  'FreshmanBio', 'SophomoreChem', 'APBio', 'APChem', 'APPhys',
  'APPhysC', 'APPhysMech', 'APES', 'APPhys2'
];

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState(courses[0]);

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center text-white">
      {/* Full-screen NASA GIF background */}
      <div className="bg-gif"></div>

      <h1 className="text-6xl my-8 z-10 relative">Select a Course</h1>
      <CourseSelector
        courses={courses}
        selected={selected}
        setSelected={(c) => { setSelected(c); router.push(`/course/${c}`); }}
      />
    </main>
  );
}
