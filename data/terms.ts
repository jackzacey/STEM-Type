// data/terms.ts
export type Term = {
  course: string;
  unit: string;
  term: string;
  definition: string;
};

export const allTerms: Term[] = [];

// Later when you add real terms:
export const getTermsForUnit = (courseId: string, unit: string): Term[] => {
  return allTerms.filter(t => t.course === courseId && t.unit === unit);
};
