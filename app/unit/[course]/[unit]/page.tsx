'use client';
import { allTerms } from 'data/terms';
import TypingEngine from 'components/TypingEngine';

interface Props { params: { course: string; unit: string } }

export default function UnitPage({ params }: Props) {
  const { course, unit } = params;
  const termsForUnit = allTerms.filter(t => t.course === course && t.unit === unit);

  return (
    <main className="min-h-screen bg-gif flex flex-col items-center justify-center">
      <h1 className="text-6xl my-8">{course} — {unit}</h1>
      <TypingEngine terms={termsForUnit} />
    </main>
  );
}
