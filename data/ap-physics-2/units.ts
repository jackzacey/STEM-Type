// data/ap-physics-2/units.ts
export const AP_PHYSICS_2_UNITS = [
  "Unit 1: Fluids",
  "Unit 2: Thermodynamics",
  "Unit 3: Electric Force, Field, and Potential",
  "Unit 4: Electric Circuits",
  "Unit 5: Magnetism and Electromagnetic Induction",
  "Unit 6: Geometric and Physical Optics",
  "Unit 7: Quantum, Atomic, and Nuclear Physics",
] as const;

export type ApPhysics2Unit = typeof AP_PHYSICS_2_UNITS[number];
