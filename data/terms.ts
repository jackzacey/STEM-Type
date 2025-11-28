export type Course =
  | 'FreshmanBio'
  | 'SophomoreChem'
  | 'APBio'
  | 'APChem'
  | 'APPhys'
  | 'APPhysC'
  | 'APPhysMech'
  | 'APES'
  | 'APPhys2';

export type Term = {
  course: Course;
  unit: string;
  term: string;
  definition: string;
};

export const allTerms: Term[] = [
  { course: 'FreshmanBio', unit: 'Cell Biology', term: 'Mitosis', definition: 'Cell division producing identical daughter cells' },
  { course: 'FreshmanBio', unit: 'Genetics', term: 'Allele', definition: 'Different forms of a gene' },
  { course: 'SophomoreChem', unit: 'Chemical Bonding', term: 'Covalent Bond', definition: 'Bond formed by sharing electrons' },
  { course: 'APBio', unit: 'Photosynthesis', term: 'Photosynthesis', definition: 'Process  of converting light to chemical energy  hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ' },
];
