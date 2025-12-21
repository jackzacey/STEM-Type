'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { COURSES, type CourseId } from '@/data/courses';

const courseColors: Record<CourseId, string> = {
  'ap-biology': '#00d4aa',
  'ap-chemistry': '#9d4edd',
  'ap-physics-1': '#3b82f6',
  'ap-physics-2': '#8b5cf6',
  'ap-physics-c-mechanics': '#06b6d4',
  'ap-physics-c-em': '#0ea5e9',
  'ap-environmental-science': '#10b981',
};

const formatName = (id: string) =>
  id
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace('Ap ', 'AP ')
    .replace('C Em', 'C E&M');

export default function CourseUnits() {
  const { course } = useParams() as { course: CourseId };
  const router = useRouter();

  if (!course || !COURSES[course]) {
    router.push('/');
    return null;
  }

  const units = COURSES[course].units;
  const color = courseColors[course] ?? '#22d3ee';

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center relative overflow-hidden px-6">
      {/* Header */}
      <h1 className="text-6xl md:text-7xl font-black text-white tracking-widest mt-32 mb-20 text-center">
        {formatName(course)}
      </h1>

      {/* Button list */}
      <div className="not-prose text-white [&_a]:text-white [&_a]:no-underline">
      <div className="w-full max-w-5xl space-y-6 mb-32">
        {units.map((unit, i) => (
          <motion.button
            key={unit}
            onClick={() => router.push(`/unit/${course}/${i + 1}`)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="group relative w-full text-left focus:outline-none"
          >
            {/* Glow */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
              style={{
                background: `linear-gradient(90deg, ${color}55, transparent)`,
              }}
            />

            {/* Button body */}
            <div className="relative flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-6 shadow-xl">
              {/* Accent bar */}
              <div
                className="h-14 w-1.5 rounded-full"
                style={{ backgroundColor: color }}
              />

              {/* Text */}
              <div className="flex-1">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-1">
                  Unit {i + 1}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {unit}
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                className="text-white/40 text-3xl font-bold"
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                →
              </motion.div>
            </div>
          </motion.button>
        ))}
      </div>
    </main>
  );
}
