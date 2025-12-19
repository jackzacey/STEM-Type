// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { COURSES } from '@/data/courses';
import { type CourseId } from '@/data/courses';
import { useEffect, useState } from 'react';

const courseColors = {
  'ap-biology': '#00d4aa',
  'ap-chemistry': '#9d4edd',
  'ap-physics-1': '#3b82f6',
  'ap-physics-2': '#8b5cf6',
  'ap-physics-c-mechanics': '#06b6d4',
  'ap-physics-c-em': '#0ea5e9',
  'ap-environmental-science': '#10b981',
} as const;

export default function Home() {
  const router = useRouter();
  const [totalUses, setTotalUses] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/counter')
      .then(res => res.json())
      .then(data => {
        if (data.total !== undefined) {
          setTotalUses(data.total);
        }
      })
      .catch(err => console.error('Failed to load total uses:', err));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Title */}
      <h1 className="text-8xl md:text-9xl font-black text-white tracking-widest mb-12 z-10">
        STEM TYPE
      </h1>

      {/* Total Uses Counter */}
      <div className="mb-16 text-4xl md:text-5xl font-bold text-cyan-400 tracking-wider">
        {totalUses !== null ? (
          <>Total Uses Worldwide: {totalUses.toLocaleString()}</>
        ) : (
          'Loading uses...'
        )}
      </div>

      {/* Floating 3D glass cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 perspective-1000">
        {Object.entries(COURSES).map(([id, config]) => {
          const color = courseColors[id as CourseId] || '#22d3ee';

          return (
            <motion.div
              key={id}
              className="relative preserve-3d cursor-pointer"
              onClick={() => router.push(`/unit/${id}`)}
              whileHover={{ 
                y: -20,
                rotateX: 8,
                rotateY: 8,
                scale: 1.03
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30
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
                    {id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace('Ap ', 'AP ')}
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
          );
        })}
      </div>

      {/* Marble floor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100" height="100" fill="%23000000"/%3E%3Cpath d="M0 50 Q25 30 50 50 T100 50 L100 100 L0 100 Z" fill="%23111111"/%3E%3C/svg%3E')`,
          backgroundSize: '100px 100px',
        }}
      />
    </main>
  );
}
