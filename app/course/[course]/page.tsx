// app/course/[course]/page.tsx
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
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Course title */}
      <h1 className="text-6xl md:text-7xl font-black text-white tracking-widest mb-16 z-10 text-center">
        {formatName(course)}
      </h1>

      {/* Units grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 perspective-1000 z-10">
        {units.map((unitName, i) => (
          <motion.div
            key={unitName}
            className="relative preserve-3d cursor-pointer"
            onClick={() => router.push(`/unit/${course}/${i + 1}`)}
            whileHover={{
              y: -16,
              rotateX: 6,
              rotateY: 6,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 26,
            }}
          >
            <div
              className="relative w-72 h-44 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.6)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-sm uppercase tracking-widest text-white/50 mb-2">
                  Unit {i + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide drop-shadow-2xl leading-tight">
                  {unitName}
                </h2>
              </div>
            </div>

            {/* Glow reflection */}
            <div
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full h-32 opacity-30 blur-xl"
              style={{
                background: `linear-gradient(to bottom, ${color}40, transparent)`,
                transform: 'scaleY(-1)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
