// data/courses.ts   ← create this file exactly here
import { AP_BIOLOGY_UNITS } from './ap-biology/units';
import { AP_CHEMISTRY_UNITS } from './ap-chemistry/units';
import { AP_PHYSICS_1_UNITS } from './ap-physics-1/units';
import { AP_PHYSICS_2_UNITS } from './ap-physics-2/units';
import { AP_PHYSICS_C_MECH_UNITS } from './ap-physics-c-mechanics/units';
import { AP_PHYSICS_C_EM_UNITS } from './ap-physics-c-em/units';
import { AP_ENV_SCIENCE_UNITS } from './ap-environmental-science/units';

export const COURSES = {
  'ap-biology': { units: AP_BIOLOGY_UNITS },
  'ap-chemistry': { units: AP_CHEMISTRY_UNITS },
  'ap-physics-1': { units: AP_PHYSICS_1_UNITS },
  'ap-physics-2': { units: AP_PHYSICS_2_UNITS },
  'ap-physics-c-mechanics': { units: AP_PHYSICS_C_MECH_UNITS },
  'ap-physics-c-em': { units: AP_PHYSICS_C_EM_UNITS },
  'ap-environmental-science': { units: AP_ENV_SCIENCE_UNITS },
} as const;

export type CourseId = keyof typeof COURSES;
