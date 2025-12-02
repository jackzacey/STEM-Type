// app/course/[course]/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
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

const formatCourseName = (id: string) =>
  id
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace('Ap ', 'AP ')
    .replace('C Em', 'C E&M');

export default function CoursePage() {
  const { course } = useParams();
  const router = useRouter();
  const courseId = course as CourseId;

  if (!COURSES[courseId]) {
    return <div>Course not found</div>;
  }

  const units = COURSES[courseId].units;
  const color = courseColors[courseId] || '#22d3ee';

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center relative overflow-hidden px-8">
      {/* Course Title */}
      <h1 className="text-7xl md:text-8xl font-black text-white tracking-widest mb-20 z-10">
        {formatCourseName(courseId)}
      </h1>

      {/* Unit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000 max-w-5xl w-full">
        {units.map((unitName, index) => (
          <motion.div
            key={unitName}
            className="relative preserve-3d cursor-pointer group"
            onClick={() => router.push(`/practice/${courseId}/${index + 1}`)}
            whileHover={{
              y: -20,
              rotateX: 8,
              rotateY: 8,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Glass Card */}
            <div
              className="relative h-40 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${color}22, ${color}11)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.6)`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${color}60, transparent 70%)`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
                <p className="text-xl font-light text-white/70">Unit {index + 1}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 tracking-wide drop-shadow-lg">
                  {unitName.replace(/^Unit \d+:\s*/, '')}
                </h2>
              </div>
            </div>

            {/* Reflection */}
            <div
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full h-32 opacity-30 blur-xl pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, ${color}40, transparent)`,
                transform: 'scaleY(-1)',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <motion.button
        className="mt-20 text-white/70 hover:text-white text-lg tracking-wider transition-colors"
        onClick={() => router.push('/')}
        whileHover={{ y: -4 }}
      >
        Back to courses
      </motion.button>

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
