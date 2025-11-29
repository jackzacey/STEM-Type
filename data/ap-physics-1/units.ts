// data/ap-physics-1/units.ts
export const AP_PHYSICS_1_UNITS = [
  "Unit 1: Kinematics",
  "Unit 2: Dynamics",
  "Unit 3: Circular Motion and Gravitation",
  "Unit 4: Energy",
  "Unit 5: Momentum",
  "Unit 6: Simple Harmonic Motion",
  "Unit 7: Torque and Rotational Motion",
] as const;

export type ApPhysics1Unit = typeof AP_PHYSICS_1_UNITS[number];
