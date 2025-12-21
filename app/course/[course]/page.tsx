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
  const color = courseColors[course] || '#22d3ee';

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-8xl md:text-9xl font-black text-white tracking-widest mb-24 z-10">
        {formatName(course)}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 perspective-1000">
        {units.map((unitName, i) => (
          <motion.div
            key={unitName}
            className="relative preserve-3d cursor-pointer"
            onClick={() => router.push(`/unit/${course}/${i + 1}`)}
            whileHover={{
              y: -20,
              rotateX: 8,
              rotateY: 8,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <div
              className="relative w-80 h-48 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.6)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="relative h-full flex items-center justify-center p-8">
                <h2 className="text-5xl md:text-6xl font-black text-white text-center tracking-wider drop-shadow-2xl">
                  {unitName}
                </h2>
              </div>
            </div>

            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 opacity-30 blur-xl"
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
