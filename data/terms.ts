// data/terms.ts
export type Term = {
  course: string;
  unit: string;
  term: string;
  definition: string;
};

// Start empty — we'll fill this later per unit
export const allTerms: Term[] = [];

export const getTermsForUnit = (courseId: string, unit: string): Term[] => {
  return allTerms.filter(t => t.course === courseId && t.unit === unit);
};
