// ============================================================
//  chemdata.js — STEMType Term Definitions
//  Structure: COURSES[courseId].units[n].terms[]
//  Each term: { term: "Name", definition: "Full definition." }
//  To add terms: find the right unit and add to its terms array.
// ============================================================

const COURSES = {

  // ── GENERAL CHEMISTRY I ─────────────────────────────────
  "gen1": {
    label: "General Chemistry I",
    units: [
      {
        id: "atomic-structure",
        label: "Atomic Structure",
        terms: [
          { term: "Atom", definition: "The smallest unit of an element that retains its chemical properties, made up of protons and neutrons in a nucleus surrounded by electrons." }
        ]
      },
      { id: "periodic-table",  label: "Periodic Table & Trends", terms: [] },
      { id: "bonding",         label: "Chemical Bonding",         terms: [] },
      { id: "stoichiometry",   label: "Stoichiometry",            terms: [] },
      { id: "gases",           label: "Gases",                    terms: [] }
    ]
  },

  // ── GENERAL CHEMISTRY II ────────────────────────────────
  "gen2": {
    label: "General Chemistry II",
    units: [
      { id: "thermodynamics",  label: "Thermodynamics",       terms: [] },
      { id: "equilibrium",     label: "Chemical Equilibrium", terms: [] },
      { id: "acids-bases",     label: "Acids & Bases",        terms: [] },
      { id: "kinetics",        label: "Chemical Kinetics",    terms: [] },
      { id: "electrochemistry",label: "Electrochemistry",     terms: [] }
    ]
  },

  // ── ORGANIC CHEMISTRY I ─────────────────────────────────
  "orgo1": {
    label: "Organic Chemistry I",
    units: [
      { id: "nomenclature",    label: "Nomenclature & Structure", terms: [] },
      { id: "stereochemistry", label: "Stereochemistry",          terms: [] },
      { id: "reactions",       label: "Reaction Mechanisms",      terms: [] },
      { id: "carbonyl",        label: "Carbonyl Chemistry",       terms: [] },
      { id: "aromatic",        label: "Aromatic Chemistry",       terms: [] }
    ]
  },

  // ── ORGANIC CHEMISTRY II ────────────────────────────────
  "orgo2": {
    label: "Organic Chemistry II",
    units: [
      { id: "conjugation",        label: "Conjugation & MO Theory",      terms: [] },
      { id: "amines",             label: "Amines",                       terms: [] },
      { id: "carboxylic-deriv",   label: "Carboxylic Acid Derivatives",  terms: [] },
      { id: "enols-enolates",     label: "Enols & Enolates",             terms: [] },
      { id: "pericyclic",         label: "Pericyclic Reactions",         terms: [] },
      { id: "carbonyl-advanced",  label: "Advanced Carbonyl Chemistry",  terms: [] },
      { id: "biomolecules",       label: "Carbohydrates & Biomolecules", terms: [] }
    ]
  }

};
