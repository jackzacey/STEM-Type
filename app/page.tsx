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
    <main className="min-h-screen bg-gif flex flex-col items-center justify-center">
      <h1 className="text-6xl my-8">Select a Course</h1>
      <CourseSelector courses={courses} selected={selected} setSelected={(c) => { setSelected(c); router.push(`/course/${c}`); }} />
    </main>
  );
}
