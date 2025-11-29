// data/ap-biology/units.ts
export const AP_BIOLOGY_UNITS = [
  "Unit 1: Chemistry of Life",
  "Unit 2: Cell Structure and Function",
  "Unit 3: Cellular Energetics",
  "Unit 4: Cell Communication and Cell Cycle",
  "Unit 5: Heredity",
  "Unit 6: Gene Expression and Regulation",
  "Unit 7: Natural Selection",
  "Unit 8: Ecology",
] as const;

export type ApBiologyUnit = typeof AP_BIOLOGY_UNITS[number];
