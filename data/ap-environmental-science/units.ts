// data/ap-environmental-science/units.ts
export const AP_ENV_SCIENCE_UNITS = [
  "Unit 1: The Living World: Ecosystems",
  "Unit 2: The Living World: Biodiversity",
  "Unit 3: Populations",
  "Unit 4: Earth Systems and Resources",
  "Unit 5: Land and Water Use",
  "Unit 6: Energy Resources and Consumption",
  "Unit 7: Atmospheric Pollution",
  "Unit 8: Aquatic and Terrestrial Pollution",
  "Unit 9: Global Change",
] as const;

export type ApEnvScienceUnit = typeof AP_ENV_SCIENCE_UNITS[number];
