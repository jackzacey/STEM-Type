// ============================================================
//  mcqdata.js — PubHealthPress Multiple Choice Questions
//  Structure: MCQ[unitId] = array of question objects
//  Each question: { q: "Question text", options: ["A","B","C","D"], answer: 0 }
//  answer is the 0-indexed position of the correct option.
//  To add questions: find the unit id below and add to its array.
// ============================================================

const MCQ = {

  // ── GLOBAL HEALTH ────────────────────────────────────────

  "global-foundations": [
    {
      q: "Which best describes health equity?",
      options: [
        "Giving every population the exact same resources",
        "A fair and just opportunity for everyone to attain their highest level of health",
        "The average life expectancy of a country",
        "A measure of how many people have health insurance"
      ],
      answer: 1
    },
    {
      q: "Social determinants of health primarily refer to:",
      options: [
        "Genetic mutations that cause disease",
        "The types of medications available in a country",
        "Non-medical conditions such as income, education, and housing that shape health",
        "The number of hospitals in a region"
      ],
      answer: 2
    },
    {
      q: "Primary health care is best characterized as:",
      options: [
        "Specialized hospital-based treatment only",
        "A whole-of-society approach delivering accessible, continuous care close to where people live",
        "Emergency care provided only during outbreaks",
        "Care available only to insured individuals"
      ],
      answer: 1
    }
  ],
  "burden-disease": [
    {
      q: "A DALY primarily measures:",
      options: [
        "The cost of a health intervention",
        "Years of life lost to death plus years lived with disability",
        "The number of doctors per capita",
        "The prevalence of a disease at one point in time"
      ],
      answer: 1
    },
    {
      q: "The epidemiologic transition describes:",
      options: [
        "A shift from infectious to chronic disease as leading causes of death as societies develop",
        "The movement of patients between hospitals",
        "A change in disease case definitions over time",
        "The process of vaccine approval"
      ],
      answer: 0
    }
  ],
  "health-systems": [
    {
      q: "Task shifting refers to:",
      options: [
        "Moving patients between clinics",
        "Redistributing health tasks from highly qualified workers to less specialized workers where appropriate",
        "Changing a country's health financing model",
        "Reassigning WHO leadership roles"
      ],
      answer: 1
    },
    {
      q: "Which organization sets international health norms and coordinates outbreak response across countries?",
      options: [
        "OSHA",
        "World Health Organization",
        "Safe Drinking Water Act agency",
        "International Health Regulations Council"
      ],
      answer: 1
    }
  ],
  "mch": [
    {
      q: "The maternal mortality ratio is expressed as:",
      options: [
        "Maternal deaths per 1,000 live births",
        "Maternal deaths per 100,000 live births",
        "Maternal deaths per 10,000 pregnancies",
        "Percentage of pregnancies ending in death"
      ],
      answer: 1
    },
    {
      q: "Exclusive breastfeeding, as recommended by WHO, means:",
      options: [
        "Breast milk plus formula for the first month",
        "Only breast milk for the first six months, with no other liquids or solids",
        "Breastfeeding only at night",
        "Breast milk until age two with no solids ever introduced"
      ],
      answer: 1
    }
  ],
  "infectious-global": [
    {
      q: "A zoonotic disease is one that:",
      options: [
        "Only affects animals, never humans",
        "Has jumped from a non-human animal to a human",
        "Is spread exclusively through contaminated water",
        "Only occurs in tropical climates"
      ],
      answer: 1
    },
    {
      q: "The One Health approach emphasizes:",
      options: [
        "Treating only human patients in a hospital setting",
        "The interconnection between human, animal, and environmental health",
        "A single global health insurance system",
        "Focusing exclusively on infectious disease vaccines"
      ],
      answer: 1
    }
  ],

  // ── EPIDEMIOLOGY ─────────────────────────────────────────

  "epi-foundations": [
    {
      q: "Epidemiology is best defined as the study of:",
      options: [
        "The treatment of individual patients in a clinical setting",
        "The distribution and determinants of health-related states in populations, and applying this to control health problems",
        "The chemical composition of pathogens",
        "Hospital administration and billing practices"
      ],
      answer: 1
    },
    {
      q: "The epidemiologic triad describes the interaction between:",
      options: [
        "Incidence, prevalence, and mortality",
        "Sensitivity, specificity, and predictive value",
        "Agent, host, and environment",
        "Cases, controls, and confounders"
      ],
      answer: 2
    },
    {
      q: "A case definition is used to:",
      options: [
        "Determine a patient's insurance eligibility",
        "Standardize diagnostic criteria so cases can be validly compared across time, place, and person",
        "Calculate a country's GDP",
        "Assign treatment protocols in a hospital"
      ],
      answer: 1
    }
  ],
  "disease-frequency": [
    {
      q: "Incidence measures:",
      options: [
        "The proportion of a population with existing disease at a point in time",
        "The number of new cases of disease occurring over a specified period",
        "The total number of deaths in a population",
        "The accuracy of a diagnostic test"
      ],
      answer: 1
    },
    {
      q: "Prevalence is influenced by:",
      options: [
        "Only the incidence rate",
        "Only the duration of disease",
        "Both incidence and duration of disease",
        "Neither incidence nor duration of disease"
      ],
      answer: 2
    },
    {
      q: "Age-adjusted rates are used to:",
      options: [
        "Inflate disease rates for funding purposes",
        "Remove the effect of differing age distributions when comparing populations",
        "Calculate the exact number of cases in a population",
        "Replace the need for incidence data"
      ],
      answer: 1
    }
  ],
  "study-designs": [
    {
      q: "Which study design randomly assigns participants to intervention or control groups?",
      options: [
        "Case-control study",
        "Cross-sectional study",
        "Randomized controlled trial",
        "Ecological study"
      ],
      answer: 2
    },
    {
      q: "A case-control study is especially useful for studying:",
      options: [
        "Common, chronic diseases only",
        "Rare diseases, by comparing exposure history between cases and controls",
        "Population-level trends only",
        "Only diseases with no known risk factors"
      ],
      answer: 1
    },
    {
      q: "The ecological fallacy is a risk in which study design?",
      options: [
        "Randomized controlled trial",
        "Cohort study",
        "Ecological study",
        "Case-control study"
      ],
      answer: 2
    }
  ],
  "measures-association": [
    {
      q: "A relative risk of 3.0 means the exposed group is:",
      options: [
        "Three times less likely to develop the outcome",
        "Three times more likely to develop the outcome than the unexposed group",
        "Unrelated to the outcome",
        "30% more likely to develop the outcome"
      ],
      answer: 1
    },
    {
      q: "The odds ratio closely approximates the relative risk when:",
      options: [
        "The disease is very common",
        "The disease is rare",
        "The study is a randomized controlled trial",
        "Sample size is very small"
      ],
      answer: 1
    },
    {
      q: "Number needed to treat is calculated as:",
      options: [
        "The inverse of the absolute risk reduction",
        "The relative risk multiplied by sample size",
        "The odds ratio divided by two",
        "The total number of patients enrolled in a trial"
      ],
      answer: 0
    }
  ],
  "bias-confounding": [
    {
      q: "Confounding occurs when a third variable is:",
      options: [
        "Only associated with the outcome, not the exposure",
        "Associated with both exposure and outcome, and not on the causal pathway between them",
        "Measured incorrectly by study staff",
        "Only present in randomized controlled trials"
      ],
      answer: 1
    },
    {
      q: "Effect modification differs from confounding because it represents:",
      options: [
        "A statistical error to be removed through adjustment",
        "A genuine difference in effect across subgroups, which should be reported rather than adjusted away",
        "A type of selection bias",
        "The same phenomenon under a different name"
      ],
      answer: 1
    },
    {
      q: "Recall bias is a particular concern in which study design?",
      options: [
        "Randomized controlled trial",
        "Case-control study",
        "Cohort study using medical records",
        "Ecological study"
      ],
      answer: 1
    }
  ],
  "screening": [
    {
      q: "A highly sensitive test is most useful for:",
      options: [
        "Ruling in disease when positive",
        "Ruling out disease when negative",
        "Determining disease prevalence",
        "Replacing the need for confirmatory testing entirely"
      ],
      answer: 1
    },
    {
      q: "Positive predictive value is directly influenced by:",
      options: [
        "The test's sensitivity only",
        "The test's specificity only",
        "The prevalence of disease in the tested population",
        "The size of the laboratory running the test"
      ],
      answer: 2
    },
    {
      q: "Lead-time bias can create the false impression that:",
      options: [
        "A test is more specific than it really is",
        "Screening prolongs survival, when it only detects disease earlier without changing the outcome",
        "A disease is more prevalent than it is",
        "A treatment is unsafe"
      ],
      answer: 1
    }
  ],
  "outbreak": [
    {
      q: "The basic reproduction number (R0) represents:",
      options: [
        "The total number of cases in an outbreak",
        "The average number of secondary infections caused by one infectious person in a fully susceptible population",
        "The percentage of the population that is vaccinated",
        "The case fatality rate of a disease"
      ],
      answer: 1
    },
    {
      q: "An epidemic curve is used primarily to:",
      options: [
        "Track hospital billing during an outbreak",
        "Show the pattern of new case onsets over time and help infer the mode of transmission",
        "Calculate a vaccine's effectiveness",
        "Determine a disease's genetic sequence"
      ],
      answer: 1
    },
    {
      q: "Herd immunity reduces disease transmission by:",
      options: [
        "Eliminating the pathogen entirely from the environment",
        "Protecting susceptible individuals indirectly when enough of the population is immune",
        "Increasing the number of susceptible hosts",
        "Requiring individual quarantine of every case"
      ],
      answer: 1
    }
  ],

  // ── ENVIRONMENTAL HEALTH ────────────────────────────────

  "env-foundations": [
    {
      q: "A dose-response relationship describes:",
      options: [
        "How disease spreads between people",
        "How the frequency or severity of a health effect changes with exposure level",
        "The cost of environmental regulation",
        "The location of an environmental hazard"
      ],
      answer: 1
    },
    {
      q: "The precautionary principle suggests that:",
      options: [
        "Action should wait until harm is scientifically proven beyond doubt",
        "Protective measures should be taken even without full scientific certainty of harm",
        "Environmental regulations should be minimized",
        "Only proven carcinogens should be regulated"
      ],
      answer: 1
    }
  ],
  "toxicology": [
    {
      q: "LD50 refers to:",
      options: [
        "The dose that cures 50% of exposed individuals",
        "The dose required to kill 50% of a test population",
        "The maximum legal dose for humans",
        "The average daily dose of a common medication"
      ],
      answer: 1
    },
    {
      q: "Bioaccumulation occurs when:",
      options: [
        "A substance is quickly eliminated from the body",
        "The rate of intake of a substance exceeds its rate of elimination, causing it to build up in an organism",
        "A pollutant is broken down in soil",
        "A chemical evaporates before absorption"
      ],
      answer: 1
    },
    {
      q: "An endocrine disruptor works by:",
      options: [
        "Directly damaging DNA",
        "Interfering with the body's hormone signaling",
        "Blocking oxygen transport in blood",
        "Increasing bioaccumulation of heavy metals only"
      ],
      answer: 1
    }
  ],
  "air-water": [
    {
      q: "PM2.5 is concerning to health because it:",
      options: [
        "Is too large to be inhaled",
        "Is small enough to penetrate deep into the lungs and enter the bloodstream",
        "Only affects outdoor plants",
        "Is regulated only in industrial zones"
      ],
      answer: 1
    },
    {
      q: "The maximum contaminant level in drinking water is:",
      options: [
        "The lowest detectable level of any substance",
        "The highest concentration of a contaminant legally allowed in public drinking water",
        "A voluntary industry guideline with no legal standing",
        "Set the same for all contaminants regardless of toxicity"
      ],
      answer: 1
    }
  ],
  "env-justice": [
    {
      q: "Environmental justice is centrally concerned with:",
      options: [
        "Maximizing industrial output regardless of location",
        "Fair treatment and meaningful involvement of all people in environmental decision-making",
        "Reducing the cost of environmental cleanup",
        "Eliminating all industrial facilities nationwide"
      ],
      answer: 1
    },
    {
      q: "A 'sacrifice zone' refers to:",
      options: [
        "An area protected from all development",
        "A heavily polluted area, often low-income or minority, that bears disproportionate environmental harm",
        "A wildlife conservation area",
        "A region with no industrial activity"
      ],
      answer: 1
    }
  ],
  "occ-health": [
    {
      q: "In the hierarchy of controls, which is considered most effective?",
      options: [
        "Personal protective equipment",
        "Administrative controls",
        "Elimination of the hazard",
        "Engineering controls"
      ],
      answer: 2
    },
    {
      q: "OSHA is responsible for:",
      options: [
        "Setting drinking water standards",
        "Setting and enforcing workplace safety and health standards",
        "Regulating outdoor air quality",
        "Approving new pharmaceuticals"
      ],
      answer: 1
    }
  ],

  // ── BIOSTATISTICS ────────────────────────────────────────

  "descriptive-stats": [
    {
      q: "Which measure of central tendency is least affected by extreme outliers?",
      options: [
        "Mean",
        "Median",
        "Standard deviation",
        "Variance"
      ],
      answer: 1
    },
    {
      q: "In a positively skewed distribution, the long tail points toward:",
      options: [
        "Lower values",
        "Higher values",
        "The mean only",
        "There is no tail in a skewed distribution"
      ],
      answer: 1
    }
  ],
  "probability": [
    {
      q: "The central limit theorem states that:",
      options: [
        "All populations are normally distributed",
        "The distribution of sample means approaches normal as sample size increases, regardless of the population's shape",
        "Sample size does not affect the shape of the sampling distribution",
        "Probability values must always equal 1"
      ],
      answer: 1
    },
    {
      q: "A 95% confidence interval reflects:",
      options: [
        "That there is a 95% chance the null hypothesis is true",
        "A range of values likely to contain the true population parameter with a specified level of confidence",
        "That 95% of individual data points fall within the range",
        "The exact value of the population parameter"
      ],
      answer: 1
    },
    {
      q: "The Poisson distribution is commonly used to model:",
      options: [
        "Continuous, normally distributed lab values",
        "Rare disease counts occurring at a constant average rate",
        "Binary treatment outcomes only",
        "Linear relationships between two variables"
      ],
      answer: 1
    }
  ],
  "hypothesis-testing": [
    {
      q: "A Type I error occurs when a study:",
      options: [
        "Fails to reject a false null hypothesis",
        "Rejects a true null hypothesis",
        "Has insufficient statistical power",
        "Uses too large a sample size"
      ],
      answer: 1
    },
    {
      q: "Statistical power is the probability of:",
      options: [
        "Committing a Type I error",
        "Correctly detecting a true effect when one exists",
        "Obtaining a p-value below 0.05 regardless of truth",
        "Avoiding all forms of bias"
      ],
      answer: 1
    },
    {
      q: "A small p-value suggests:",
      options: [
        "The effect size is large and clinically important",
        "The observed data would be unusual if the null hypothesis were true",
        "The null hypothesis is definitely false",
        "The study had high statistical power"
      ],
      answer: 1
    }
  ],
  "regression": [
    {
      q: "Logistic regression is most appropriate when the outcome variable is:",
      options: [
        "Continuous",
        "Binary",
        "Time-to-event",
        "Categorical with more than 5 unordered levels"
      ],
      answer: 1
    },
    {
      q: "R-squared represents:",
      options: [
        "The strength of a causal relationship",
        "The proportion of variability in the outcome explained by the predictors",
        "The p-value of the regression model",
        "The sample size needed for the study"
      ],
      answer: 1
    }
  ],
  "sampling": [
    {
      q: "Stratified sampling is used primarily to:",
      options: [
        "Save time by sampling only convenient participants",
        "Ensure adequate representation of important subgroups within a population",
        "Eliminate the need for random selection",
        "Increase sampling error"
      ],
      answer: 1
    },
    {
      q: "Sampling error differs from bias because it:",
      options: [
        "Is a systematic distortion introduced by study design",
        "Is a random, expected consequence of sampling that tends to decrease with larger sample sizes",
        "Cannot be reduced by any means",
        "Only occurs in randomized controlled trials"
      ],
      answer: 1
    }
  ],

};

