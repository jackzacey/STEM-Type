// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { COURSES } from '@/data/courses';
import { type CourseId } from '@/data/courses';

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

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-16 px-8 overflow-hidden">
      {/* Title */}
      <h1 className="text-8xl md:text-9xl font-black text-white tracking-widest z-10">
        STEM TYPE
      </h1>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl w-full">
        {Object.entries(COURSES).map(([id]) => {
          const color = courseColors[id as CourseId] || '#22d3ee';

          return (
            <motion.button
              key={id}
              onClick={() => router.push(`/unit/${id}`)}
              className="group relative w-full h-32 rounded-2xl overflow-hidden cursor-pointer border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${color}22, ${color}11)`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
              // SUPER SMOOTH hover (no bounce, no recoil)
              whileHover={{ 
                y: -12,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30   // This kills the recoil
              }}
            >
              {/* Subtle inner glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${color}40, transparent 70%)` }}
              />

              {/* Course Name */}
              <div className="relative h-full flex items-center justify-center px-6">
                <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-wider drop-shadow-2xl">
                  {formatName(id)}
                </h2>
              </div>

              {/* Reflection */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-20 opacity-20 blur-xl pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${color}60, transparent)`,
                  transform: 'scaleY(-1) translateY(-40px)',
                }}
              />
            </motion.button>
          );
        })}
      </div>
    </main>
  );
}
