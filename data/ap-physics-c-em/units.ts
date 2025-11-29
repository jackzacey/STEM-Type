// data/ap-physics-c-em/units.ts
export const AP_PHYSICS_C_EM_UNITS = [
  "Unit 1: Electrostatics",
  "Unit 2: Conductors, Capacitors, Dielectrics",
  "Unit 3: Electric Circuits",
  "Unit 4: Magnetic Fields",
  "Unit 5: Electromagnetism",
] as const;

export type ApPhysicsCEmUnit = typeof AP_PHYSICS_C_EM_UNITS[number];
