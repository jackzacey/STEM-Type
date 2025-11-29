// data/ap-chemistry/units.ts
export const AP_CHEMISTRY_UNITS = [
  "Unit 1: Atomic Structure and Properties",
  "Unit 2: Molecular and Ionic Compound Structure and Properties",
  "Unit 3: Intermolecular Forces and Properties",
  "Unit 4: Chemical Reactions",
  "Unit 5: Kinetics",
  "Unit 6: Thermodynamics",
  "Unit 7: Equilibrium",
  "Unit 8: Acids and Bases",
  "Unit 9: Applications of Thermodynamics",
] as const;

export type ApChemistryUnit = typeof AP_CHEMISTRY_UNITS[number];
