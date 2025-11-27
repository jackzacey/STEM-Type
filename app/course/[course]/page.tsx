'use client';
import { allTerms } from '@data/terms';
import UnitSelector from '@components/UnitSelector';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props { params: { course: string } }

export default function CoursePage({ params }: Props) {
  const { course } = params;
  const router = useRouter();
  const units = Array.from(new Set(allTerms.filter(t => t.course === course).map(t => t.unit)));
  const [selected, setSelected] = useState(units[0] || '');

  return (
    <main className="min-h-screen bg-gif flex flex-col items-center justify-center">
      <h1 className="text-6xl my-8">{course} — Select a Unit</h1>
      <UnitSelector units={units} selected={selected} setSelected={(u) => { setSelected(u); router.push(`/unit/${course}/${u}`); }} />
    </main>
  );
}
