// ============================================================
//  mcqdata.js — STEMType Multiple Choice Questions
//  Structure: MCQ[unitId] = array of question objects
//  Each question: { q: "Question text", options: ["A","B","C","D"], answer: 0 }
//  answer is the 0-indexed position of the correct option.
//  To add questions: find the unit id below and add to its array.
// ============================================================

const MCQ = {

  // ── GEN CHEM I ──────────────────────────────────────────

  "atomic-structure": [
    {
      q: "What is the correct definition of an atom?",
      options: [
        "The smallest unit of an element that retains its chemical properties",
        "A group of atoms bonded together to form a molecule",
        "A charged particle formed by gaining or losing electrons",
        "The dense central region of a cell"
      ],
      answer: 0
    },
    {
      q: "Which subatomic particles are found in the nucleus of an atom?",
      options: [
        "Electrons and protons",
        "Protons and neutrons",
        "Neutrons and electrons",
        "Quarks and leptons"
      ],
      answer: 1
    },
    {
      q: "Which statement about electrons is correct?",
      options: [
        "Electrons are found in the nucleus and carry a positive charge",
        "Electrons are found in the nucleus and carry a negative charge",
        "Electrons surround the nucleus and carry a negative charge",
        "Electrons surround the nucleus and carry a positive charge"
      ],
      answer: 2
    }
  ],

  // "periodic-table": [ /* add questions here */ ],
  // "bonding":        [ /* add questions here */ ],
  // "stoichiometry":  [ /* add questions here */ ],
  // "gases":          [ /* add questions here */ ],

  // ── GEN CHEM II ─────────────────────────────────────────

  // "thermodynamics":   [ /* add questions here */ ],
  // "equilibrium":      [ /* add questions here */ ],
  // "acids-bases":      [ /* add questions here */ ],
  // "kinetics":         [ /* add questions here */ ],
  // "electrochemistry": [ /* add questions here */ ],

  // ── ORGO I ──────────────────────────────────────────────

  // "nomenclature":    [ /* add questions here */ ],
  // "stereochemistry": [ /* add questions here */ ],
  // "reactions":       [ /* add questions here */ ],
  // "carbonyl":        [ /* add questions here */ ],
  // "aromatic":        [ /* add questions here */ ],

  // ── ORGO II ─────────────────────────────────────────────

  // "conjugation":       [ /* add questions here */ ],
  // "amines":            [ /* add questions here */ ],
  // "carboxylic-deriv":  [ /* add questions here */ ],
  // "enols-enolates":    [ /* add questions here */ ],
  // "pericyclic":        [ /* add questions here */ ],
  // "carbonyl-advanced": [ /* add questions here */ ],
  // "biomolecules":      [ /* add questions here */ ],

};
