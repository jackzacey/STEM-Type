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
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center px-6">
      {/* Header */}
      <h1 className="text-6xl md:text-7xl font-black text-white tracking-widest mt-32 mb-20 text-center">
        {formatName(course)}
      </h1>

      {/* Units */}
      <div className="w-full max-w-5xl space-y-6 pb-32">
        {units.map((unit, i) => (
          <motion.button
            key={unit}
            onClick={() => router.push(`/unit/${course}/${i + 1}`)}
            initial={false}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 500, damping: 32 }}
            className="group relative w-full text-left focus:outline-none"
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, ${color}55, transparent 70%)`,
              }}
            />

            {/* Button surface */}
            <div className="relative flex items-center gap-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
              {/* Accent rail */}
              <div
                className="h-12 w-1.5 rounded-full"
                style={{ backgroundColor: color }}
              />

              {/* Text */}
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-1">
                  Unit {i + 1}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {unit}
                </div>
              </div>

              {/* Chevron */}
              <motion.div
                className="text-white/30 text-3xl font-bold"
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
