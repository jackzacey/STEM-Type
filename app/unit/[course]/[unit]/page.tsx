'use client';
import { allTerms } from '../../../../data/terms';
import TypingEngine from '../../../components/TypingEngine';

interface Props { params: { course: string; unit: string } }

export default function UnitPage({ params }: Props) {
  const { course, unit } = params;
  const termsForUnit = allTerms.filter(t => t.course === course && t.unit === unit);

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center text-white">
      {/* Full-screen NASA GIF background */}
      <div className="bg-gif"></div>

      <h1 className="text-6xl my-8 z-10 relative">{course} — {unit}</h1>
      <TypingEngine terms={termsForUnit} />
    </main>
  );
}
