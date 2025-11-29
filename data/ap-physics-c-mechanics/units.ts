// data/ap-physics-c-mechanics/units.ts
export const AP_PHYSICS_C_MECH_UNITS = [
  "Unit 1: Kinematics",
  "Unit 2: Newton’s Laws of Motion",
  "Unit 3: Work, Energy, and Power",
  "Unit 4: Systems of Particles and Linear Momentum",
  "Unit 5: Rotation",
  "Unit 6: Oscillations",
  "Unit 7: Gravitation",
] as const;

export type ApPhysicsCMechUnit = typeof AP_PHYSICS_C_MECH_UNITS[number];
