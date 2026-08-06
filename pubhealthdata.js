// ============================================================
//  pubhealthdata.js — PubHealthPress Term Definitions
//  Structure: COURSES[courseId].units[n].terms[]
//  Each term: { term: "Name", definition: "Full definition." }
//  To add terms: find the right unit and add to its terms array.
// ============================================================

const COURSES = {

  // ── GLOBAL HEALTH ────────────────────────────────────────
  "global": {
    label: "Global Health",
    units: [
      {
        id: "global-foundations",
        label: "Foundations of Global Health",
        terms: [
          { term: "Global Health", definition: "Global health is an area of study, research, and practice that prioritizes improving health and achieving health equity for all people worldwide, emphasizing transnational health issues and cross-border collaboration. It draws on epidemiology, medicine, economics, and policy to address problems that no single country can solve alone." },
          { term: "Health Equity", definition: "Health equity is the principle that everyone should have a fair and just opportunity to attain their highest level of health, which requires removing obstacles such as poverty, discrimination, and lack of access to care. It differs from health equality because it accounts for differing needs rather than distributing resources identically." },
          { term: "Social Determinants of Health", definition: "Social determinants of health are the non-medical conditions in which people are born, grow, live, work, and age that shape health outcomes, including income, education, housing, and access to food. These conditions are shaped by the distribution of money, power, and resources at global, national, and local levels." },
          { term: "Universal Health Coverage", definition: "Universal health coverage means that all individuals and communities receive the health services they need without suffering financial hardship, encompassing the full range of essential health services from promotion to palliative care. It is a central target of the United Nations Sustainable Development Goals." },
          { term: "Primary Health Care", definition: "Primary health care is a whole-of-society approach to health that integrates promotive, preventive, curative, rehabilitative, and palliative care as close as possible to where people live and work. It emphasizes first-contact, accessible, and continuous care rather than specialized hospital-based treatment." },
          { term: "Health Disparity", definition: "A health disparity is a preventable difference in the burden of disease, injury, or opportunity to achieve optimal health that is experienced by socially disadvantaged populations. Disparities are often linked to social, economic, or environmental disadvantage rather than biology alone." }
        ]
      },
      {
        id: "burden-disease",
        label: "Global Burden of Disease",
        terms: [
          { term: "Global Burden of Disease", definition: "The Global Burden of Disease is a comprehensive research program that quantifies health loss from hundreds of diseases, injuries, and risk factors across countries and time using standardized metrics. It allows comparison of the relative impact of different conditions to guide health priority-setting." },
          { term: "DALY", definition: "A Disability-Adjusted Life Year (DALY) is a summary measure of overall disease burden that combines years of life lost due to premature death with years lived with disability, weighted by severity. One DALY represents one lost year of healthy life." },
          { term: "QALY", definition: "A Quality-Adjusted Life Year (QALY) is a measure of health outcome that combines length of life with quality of life, where a year in perfect health equals 1.0 and death equals 0. It is commonly used in cost-effectiveness analysis to compare the value of different health interventions." },
          { term: "Epidemiologic Transition", definition: "The epidemiologic transition describes the long-term shift in a population's leading causes of death and illness from infectious diseases and malnutrition toward chronic and degenerative diseases as societies develop economically. This shift is typically accompanied by declining fertility and rising life expectancy." },
          { term: "Double Burden of Disease", definition: "The double burden of disease refers to the simultaneous presence of infectious diseases and undernutrition alongside rising rates of noncommunicable diseases and obesity within the same population, often seen in low- and middle-income countries undergoing rapid transition. It strains health systems designed around a single disease profile." },
          { term: "Life Expectancy", definition: "Life expectancy is the average number of years a person is expected to live based on current age-specific mortality rates in a population. It is one of the most widely used summary indicators of a population's overall health status." }
        ]
      },
      {
        id: "health-systems",
        label: "Health Systems & Policy",
        terms: [
          { term: "Health System", definition: "A health system consists of all organizations, people, and actions whose primary intent is to promote, restore, or maintain health, including financing, workforce, service delivery, and governance components. The World Health Organization frames these as interacting building blocks that together determine system performance." },
          { term: "WHO (World Health Organization)", definition: "The World Health Organization is the specialized agency of the United Nations responsible for international public health, setting norms and standards, coordinating global responses to health emergencies, and providing technical support to member states. It was established in 1948 and is headquartered in Geneva, Switzerland." },
          { term: "Health Financing", definition: "Health financing refers to the function of a health system concerned with mobilizing, pooling, and allocating money to pay for health services, encompassing mechanisms like taxation, insurance, and out-of-pocket payment. The way a system is financed strongly influences equity of access and financial protection." },
          { term: "Community Health Worker", definition: "A community health worker is a trusted member of the community who provides basic health education, referral, and follow-up services, often serving as a bridge between formal health systems and underserved populations. They are especially important for extending care in areas with workforce shortages." },
          { term: "Health Policy", definition: "Health policy encompasses the decisions, plans, and actions undertaken by governments and organizations to achieve specific health care goals within a society, including laws, regulations, and funding priorities. Effective health policy requires balancing scientific evidence with political, economic, and social considerations." },
          { term: "Task Shifting", definition: "Task shifting is the rational redistribution of health tasks among health workforce teams, moving specific tasks from highly qualified health workers to those with fewer qualifications where appropriate, to make more efficient use of available health workers. It has been widely used to expand access to services like HIV treatment in low-resource settings." }
        ]
      },
      {
        id: "mch",
        label: "Maternal & Child Health",
        terms: [
          { term: "Maternal Mortality Ratio", definition: "The maternal mortality ratio is the number of maternal deaths during a given time period per 100,000 live births during the same period, reflecting the risk of death once a woman becomes pregnant. It is one of the most sensitive indicators of the strength and equity of a health system." },
          { term: "Under-5 Mortality Rate", definition: "The under-5 mortality rate is the probability of a child dying between birth and exactly five years of age, expressed per 1,000 live births. It is widely used as a key indicator of child health, nutrition, and overall development in a population." },
          { term: "Skilled Birth Attendant", definition: "A skilled birth attendant is an accredited health professional, such as a midwife, doctor, or nurse, trained to manage normal pregnancies, childbirth, and the immediate postnatal period, and to identify and manage complications. Skilled attendance at birth is strongly associated with reduced maternal and neonatal mortality." },
          { term: "Family Planning", definition: "Family planning refers to the ability of individuals and couples to anticipate and attain their desired number of children and the spacing and timing of their births, achieved through use of contraceptive methods and treatment of infertility. Access to family planning improves maternal and child health outcomes and supports reproductive autonomy." },
          { term: "Exclusive Breastfeeding", definition: "Exclusive breastfeeding means an infant receives only breast milk, with no other liquids or solids except medically indicated supplements, for the first six months of life. The World Health Organization recommends this practice due to its protective effects against infection and malnutrition." },
          { term: "Antenatal Care", definition: "Antenatal care refers to the care provided by skilled health workers to pregnant women and adolescent girls to ensure the best health outcomes for both mother and baby, including screening, monitoring, and health education. The World Health Organization recommends a minimum of eight contacts during pregnancy for optimal outcomes." }
        ]
      },
      {
        id: "infectious-global",
        label: "Infectious Disease & Global Health Security",
        terms: [
          { term: "Global Health Security", definition: "Global health security refers to the activities required to minimize the danger and impact of acute public health events that endanger the collective health of populations across national borders. It encompasses preparedness, detection, and response capacities for outbreaks and other health emergencies." },
          { term: "Pandemic", definition: "A pandemic is an epidemic that has spread across multiple countries or continents, typically affecting a large number of people through sustained human-to-human transmission of a new or re-emerging pathogen. Unlike an epidemic, a pandemic implies wide geographic spread rather than a fixed threshold of cases." },
          { term: "International Health Regulations", definition: "The International Health Regulations are a legally binding agreement among World Health Organization member states that requires countries to develop core capacities to detect, assess, report, and respond to public health events of international concern. They establish the framework under which a Public Health Emergency of International Concern can be declared." },
          { term: "Zoonotic Disease", definition: "A zoonotic disease is an infectious disease that has jumped from a non-human animal to a human, often through direct contact, vectors, or contaminated food and water. A large majority of newly emerging infectious diseases in humans originate from animal reservoirs." },
          { term: "Neglected Tropical Disease", definition: "Neglected tropical diseases are a diverse group of communicable diseases that prevail in tropical and subtropical conditions in low-income populations and historically have received less funding and research attention than diseases like HIV, tuberculosis, and malaria. They include conditions such as lymphatic filariasis, schistosomiasis, and trachoma." },
          { term: "One Health", definition: "One Health is a collaborative, multisectoral approach that recognizes the interconnection between human health, animal health, and environmental health, and works across these disciplines to achieve optimal health outcomes for all. It is particularly relevant to understanding and preventing zoonotic disease emergence and antimicrobial resistance." }
        ]
      }
    ]
  },

  // ── EPIDEMIOLOGY ─────────────────────────────────────────
  "epi": {
    label: "Epidemiology",
    units: [
      {
        id: "epi-foundations",
        label: "Foundations of Epidemiology",
        terms: [
          { term: "Epidemiology", definition: "Epidemiology is the study of the distribution and determinants of health-related states or events in specified populations, and the application of this study to control health problems. It forms the scientific foundation for public health practice and evidence-based policy." },
          { term: "Public Health Surveillance", definition: "Public health surveillance is the ongoing, systematic collection, analysis, and interpretation of health data essential to planning, implementing, and evaluating public health practice, closely integrated with timely dissemination to those who need to know. It allows early detection of changes in disease patterns and outbreak trends." },
          { term: "Epidemiologic Triad", definition: "The epidemiologic triad is a model describing the interaction between an agent, a host, and the environment that must align for disease to occur, historically developed to explain infectious disease causation. Modifying any one of the three components can be used to interrupt disease transmission." },
          { term: "Natural History of Disease", definition: "The natural history of disease describes the progression of a disease process in an individual over time, from exposure and biological onset through subclinical and clinical stages to resolution, disability, or death, in the absence of intervention. Understanding this timeline helps identify optimal points for prevention and treatment." },
          { term: "Determinants of Health", definition: "Determinants of health are the range of biological, behavioral, social, and environmental factors that influence the health status of individuals or populations. They include genetics, individual behavior, access to health services, and the social and physical environment." },
          { term: "Case Definition", definition: "A case definition is a set of standardized diagnostic criteria that must be fulfilled for an individual to be classified as a case of a particular disease or health condition in surveillance or an investigation. Using a consistent case definition allows valid comparison of disease occurrence across time, place, and person." }
        ]
      },
      {
        id: "disease-frequency",
        label: "Measures of Disease Frequency",
        terms: [
          { term: "Incidence", definition: "Incidence is the number of new cases of a disease that occur in a population during a specified period of time, reflecting the rate at which new disease develops. It is a key measure of disease risk and is essential for studying disease etiology." },
          { term: "Prevalence", definition: "Prevalence is the proportion of a population that has a specific disease or condition at a given point or period in time, reflecting the existing burden of disease rather than new occurrences. It is influenced by both incidence and the duration of the disease." },
          { term: "Cumulative Incidence", definition: "Cumulative incidence, also called attack rate, is the proportion of an initially disease-free population that develops a disease over a specified period of time, calculated as new cases divided by the population at risk at the start of that period. It represents the average risk of developing disease over that time frame." },
          { term: "Incidence Rate", definition: "Incidence rate, or person-time incidence, measures the number of new cases of disease per unit of person-time at risk, accounting for varying lengths of follow-up among individuals in a study. It is especially useful when participants enter or leave a study at different times." },
          { term: "Point Prevalence", definition: "Point prevalence is the proportion of a population that has a disease at one specific point in time, as opposed to period prevalence, which measures the proportion affected at any time during a defined interval. Point prevalence is often assessed through a single cross-sectional survey." },
          { term: "Age-Adjusted Rate", definition: "An age-adjusted rate is a summary rate that has been statistically modified to remove the effect of differing age distributions when comparing disease or mortality rates between populations. This adjustment allows for a fairer comparison of underlying disease risk between groups with different age structures." }
        ]
      },
      {
        id: "study-designs",
        label: "Study Designs",
        terms: [
          { term: "Cohort Study", definition: "A cohort study is an observational study design that follows a group of individuals sharing a common exposure status forward in time to compare the incidence of an outcome between exposed and unexposed groups. It can be conducted prospectively or retrospectively and allows direct calculation of incidence and relative risk." },
          { term: "Case-Control Study", definition: "A case-control study is an observational study design that identifies individuals with a disease outcome (cases) and without it (controls) and then looks backward to compare their history of exposure. This design is efficient for studying rare diseases but is more prone to recall and selection bias than a cohort study." },
          { term: "Cross-Sectional Study", definition: "A cross-sectional study assesses exposure and outcome simultaneously in a population at a single point in time, providing a snapshot of prevalence rather than incidence. Because exposure and outcome are measured together, this design cannot establish the temporal sequence needed to infer causation." },
          { term: "Randomized Controlled Trial", definition: "A randomized controlled trial is an experimental study design in which participants are randomly assigned to receive an intervention or a control, minimizing confounding and allowing for the strongest causal inference among common study designs. Randomization helps ensure that known and unknown confounders are evenly distributed between groups." },
          { term: "Ecological Study", definition: "An ecological study analyzes data at the population or group level rather than the individual level, examining associations between average exposure and average outcome across different groups. This design is useful for generating hypotheses but is vulnerable to the ecological fallacy, in which group-level associations do not reflect individual-level relationships." },
          { term: "Case Series", definition: "A case series is a descriptive study that reports the characteristics and clinical course of a group of patients who share a particular disease or exposure, without a comparison group. It is often used to identify unusual patterns that generate hypotheses for further, more rigorous investigation." }
        ]
      },
      {
        id: "measures-association",
        label: "Measures of Association",
        terms: [
          { term: "Relative Risk", definition: "Relative risk is the ratio of the incidence of disease in an exposed group to the incidence of disease in an unexposed group, indicating how many times more (or less) likely the exposed group is to develop the outcome. A relative risk greater than 1 suggests the exposure increases risk of disease." },
          { term: "Odds Ratio", definition: "An odds ratio is the ratio of the odds of exposure among cases to the odds of exposure among controls, most commonly used in case-control studies where incidence and relative risk cannot be directly calculated. When disease is rare, the odds ratio closely approximates the relative risk." },
          { term: "Attributable Risk", definition: "Attributable risk is the difference in incidence rates between an exposed group and an unexposed group, representing the excess risk of disease that can be attributed to the exposure itself. It is useful for estimating the public health impact of removing a specific exposure." },
          { term: "Population Attributable Risk", definition: "Population attributable risk estimates the proportion of disease incidence in the entire population, including both exposed and unexposed individuals, that could be eliminated if the exposure were removed. It depends on both the strength of the association and the prevalence of the exposure in the population." },
          { term: "Number Needed to Treat", definition: "Number needed to treat is the average number of patients who need to receive a given intervention for one additional person to benefit, calculated as the inverse of the absolute risk reduction. A lower number needed to treat generally indicates a more effective intervention." },
          { term: "Risk Difference", definition: "Risk difference, also called absolute risk reduction or excess risk, is the arithmetic difference between the risk of an outcome in an exposed group and the risk in an unexposed group. Unlike relative risk, it conveys the absolute impact of an exposure on disease occurrence." }
        ]
      },
      {
        id: "bias-confounding",
        label: "Bias, Confounding & Effect Modification",
        terms: [
          { term: "Selection Bias", definition: "Selection bias occurs when the individuals included in a study are not representative of the target population, or when comparison groups differ systematically in ways related to both exposure and outcome. It arises from how subjects are selected, recruited, or retained in a study." },
          { term: "Information Bias", definition: "Information bias arises from systematic errors in how exposure, outcome, or covariate data are measured or classified among study participants, which can distort the observed association. It includes forms such as misclassification, recall bias, and observer bias." },
          { term: "Confounding", definition: "Confounding occurs when a third variable is associated with both the exposure and the outcome, without being on the causal pathway between them, distorting the true relationship between exposure and disease. Controlling for confounders through study design or statistical analysis is essential for valid causal inference." },
          { term: "Effect Modification", definition: "Effect modification occurs when the strength or direction of an association between an exposure and outcome differs across levels of a third variable, meaning the effect is genuinely different in different subgroups. Unlike confounding, effect modification is a real biological or social phenomenon that should be reported rather than removed through adjustment." },
          { term: "Recall Bias", definition: "Recall bias is a type of information bias in which study participants with a disease outcome are more likely to remember and report past exposures differently than those without the disease, often due to greater motivation to identify a cause. It is a particular concern in retrospective study designs such as case-control studies." },
          { term: "Reverse Causation", definition: "Reverse causation occurs when the presumed outcome actually precedes and causes the presumed exposure, reversing the true direction of the causal relationship being studied. It is a particular threat in cross-sectional studies where exposure and outcome are measured at the same point in time." }
        ]
      },
      {
        id: "screening",
        label: "Screening & Diagnostic Testing",
        terms: [
          { term: "Sensitivity", definition: "Sensitivity is the ability of a test to correctly identify individuals who truly have the disease, calculated as the proportion of true positives among all individuals who actually have the disease. A highly sensitive test produces few false negatives and is useful for ruling out disease when the result is negative." },
          { term: "Specificity", definition: "Specificity is the ability of a test to correctly identify individuals who truly do not have the disease, calculated as the proportion of true negatives among all individuals who do not have the disease. A highly specific test produces few false positives and is useful for ruling in disease when the result is positive." },
          { term: "Positive Predictive Value", definition: "Positive predictive value is the probability that a person with a positive test result actually has the disease, and unlike sensitivity and specificity, it is directly influenced by the prevalence of disease in the population being tested. It answers the clinically relevant question of how much confidence to place in a positive result." },
          { term: "Negative Predictive Value", definition: "Negative predictive value is the probability that a person with a negative test result truly does not have the disease, and like positive predictive value, it varies with the underlying prevalence of disease in the tested population. Higher disease prevalence tends to lower negative predictive value even when test performance is unchanged." },
          { term: "Lead-Time Bias", definition: "Lead-time bias occurs when early detection through screening appears to prolong survival simply because the disease is diagnosed earlier in its natural history, without actually delaying death or improving outcomes. It can create a false impression that a screening program is effective." },
          { term: "ROC Curve", definition: "A receiver operating characteristic (ROC) curve is a graphical plot that illustrates the diagnostic performance of a test across all possible cutoff thresholds by plotting sensitivity against one minus specificity. The area under the ROC curve summarizes overall test accuracy, with a value closer to 1.0 indicating better discrimination." }
        ]
      },
      {
        id: "outbreak",
        label: "Outbreak Investigation & Surveillance",
        terms: [
          { term: "Outbreak", definition: "An outbreak is the occurrence of disease cases in excess of what would normally be expected in a defined community, geographic area, or season, and may involve as few as two related cases. The term is often used interchangeably with a localized epidemic." },
          { term: "Epidemic Curve", definition: "An epidemic curve is a graphical display of the number of new cases of a disease plotted against time of onset, used to characterize an outbreak's pattern of transmission, magnitude, and trend over time. Its shape can help investigators infer whether transmission is from a point source, a continuous source, or person-to-person spread." },
          { term: "Index Case", definition: "The index case is the first documented case of a disease within an outbreak investigation, often used as the starting point for identifying the source and tracing subsequent transmission. It is not necessarily the true first case in the community, only the first one detected by investigators." },
          { term: "Herd Immunity", definition: "Herd immunity is the indirect protection from infectious disease that occurs when a sufficiently high proportion of a population is immune, whether through vaccination or prior infection, reducing the likelihood of transmission to susceptible individuals. The threshold needed to achieve herd immunity varies depending on the pathogen's transmissibility." },
          { term: "Basic Reproduction Number (R0)", definition: "The basic reproduction number, R0, is the average number of secondary infections produced by a single infectious individual in a completely susceptible population. An R0 greater than 1 indicates that an outbreak is expected to grow, while an R0 less than 1 suggests it will decline." },
          { term: "Contact Tracing", definition: "Contact tracing is the process of identifying, assessing, and managing people who have been exposed to a person infected with a communicable disease, in order to prevent further onward transmission. It is a core tool of outbreak control for diseases spread through close contact." }
        ]
      }
    ]
  },

  // ── ENVIRONMENTAL HEALTH ────────────────────────────────
  "envhealth": {
    label: "Environmental Health",
    units: [
      {
        id: "env-foundations",
        label: "Foundations of Environmental Health",
        terms: [
          { term: "Environmental Health", definition: "Environmental health is the branch of public health concerned with all aspects of the natural and built environment that may affect human health, including air, water, soil, food, and the workplace. It focuses on assessing, correcting, and preventing environmental factors that could adversely impact present and future generations." },
          { term: "Exposure Assessment", definition: "Exposure assessment is the process of measuring or estimating the intensity, frequency, and duration of human contact with a chemical, physical, or biological agent, along with the number of people exposed. It is a critical step in characterizing the potential health risk posed by an environmental hazard." },
          { term: "Environmental Hazard", definition: "An environmental hazard is any physical, chemical, or biological agent present in the environment that has the potential to cause harm to human health or ecosystems. Hazards can originate from natural sources or human activity and range from air pollutants to extreme weather events." },
          { term: "Dose-Response Relationship", definition: "A dose-response relationship describes how the frequency or severity of a health effect changes as the level of exposure to an agent increases, forming a fundamental concept in toxicology and risk assessment. Establishing this relationship helps determine safe exposure thresholds and guides regulatory limits." },
          { term: "Risk Assessment", definition: "Risk assessment is the systematic process of evaluating the potential for adverse health effects from exposure to an environmental hazard, typically involving hazard identification, dose-response assessment, exposure assessment, and risk characterization. It provides the scientific basis for environmental regulations and public health decisions." },
          { term: "Precautionary Principle", definition: "The precautionary principle holds that when an activity raises threats of harm to human health or the environment, protective measures should be taken even if some cause-and-effect relationships are not fully established scientifically. It shifts the burden of proof toward demonstrating safety rather than waiting for definitive proof of harm." }
        ]
      },
      {
        id: "toxicology",
        label: "Toxicology",
        terms: [
          { term: "Toxicology", definition: "Toxicology is the scientific study of the adverse effects of chemical, physical, or biological agents on living organisms, encompassing how substances enter the body, how they are processed, and the mechanisms by which they cause harm. It provides the foundational science underlying environmental and occupational health regulation." },
          { term: "LD50", definition: "LD50, or median lethal dose, is the dose of a substance required to kill 50 percent of a test population of organisms, typically expressed in milligrams of substance per kilogram of body weight. It is a standard measure used to compare the acute toxicity of different chemicals." },
          { term: "Acute Toxicity", definition: "Acute toxicity refers to adverse health effects that occur rapidly, usually within 24 to 96 hours, following a single or short-term exposure to a substance, in contrast to chronic toxicity, which develops from repeated or prolonged exposure over months or years. Both are essential considerations in determining safe exposure limits." },
          { term: "Bioaccumulation", definition: "Bioaccumulation is the gradual buildup of a substance, such as a pesticide or heavy metal, within an organism over time because the rate of intake exceeds the rate of elimination. Substances that bioaccumulate can also biomagnify, reaching increasingly higher concentrations at higher levels of the food chain." },
          { term: "Endocrine Disruptor", definition: "An endocrine disruptor is a chemical that interferes with the body's hormone systems by mimicking, blocking, or altering natural hormone signaling, potentially causing developmental, reproductive, or metabolic effects. Common examples include certain plastics additives, pesticides, and industrial chemicals." },
          { term: "Carcinogen", definition: "A carcinogen is any substance, organism, or agent capable of causing cancer by damaging the genome or disrupting cellular metabolic processes that control cell growth and division. Carcinogens are classified by organizations such as the International Agency for Research on Cancer based on the strength of evidence from human and animal studies." }
        ]
      },
      {
        id: "air-water",
        label: "Air & Water Quality",
        terms: [
          { term: "Criteria Air Pollutants", definition: "Criteria air pollutants are six common pollutants regulated by the U.S. Environmental Protection Agency because of their widespread presence and demonstrated harm to human health and the environment: particulate matter, ground-level ozone, carbon monoxide, sulfur dioxide, nitrogen dioxide, and lead. National standards set allowable concentrations for each pollutant in outdoor air." },
          { term: "Particulate Matter (PM2.5)", definition: "PM2.5 refers to fine particulate matter with a diameter of 2.5 micrometers or smaller, small enough to penetrate deep into the lungs and enter the bloodstream. Exposure is associated with cardiovascular disease, respiratory illness, and premature death, making it one of the most studied air pollutants in public health." },
          { term: "Safe Drinking Water Act", definition: "The Safe Drinking Water Act is the primary federal law in the United States that establishes standards for public drinking water systems, setting enforceable limits on contaminants to protect public health. It requires water systems to monitor and report contaminant levels and to notify the public of violations." },
          { term: "Maximum Contaminant Level", definition: "The maximum contaminant level is the highest concentration of a contaminant legally allowed in drinking water delivered to any user of a public water system, set by regulatory agencies based on health risk and technical feasibility. Levels are established to protect public health while remaining achievable given available treatment technology." },
          { term: "Waterborne Disease", definition: "A waterborne disease is an illness caused by pathogenic microorganisms or toxins transmitted through contaminated water, including bacteria, viruses, and parasites that cause conditions such as cholera, giardiasis, and cryptosporidiosis. Access to safe water and sanitation is one of the most effective interventions for preventing these diseases globally." },
          { term: "Air Quality Index", definition: "The Air Quality Index is a standardized scale used to communicate how polluted the air currently is or how polluted it is forecast to become, translating pollutant concentrations into a single number and color-coded category. It helps the public understand health risks and take precautions on days with poor air quality." }
        ]
      },
      {
        id: "env-justice",
        label: "Environmental Justice",
        terms: [
          { term: "Environmental Justice", definition: "Environmental justice is the fair treatment and meaningful involvement of all people, regardless of race, color, national origin, or income, in the development, implementation, and enforcement of environmental laws, regulations, and policies. It seeks to ensure that no group bears a disproportionate share of negative environmental consequences." },
          { term: "Environmental Racism", definition: "Environmental racism refers to the disproportionate placement of environmental hazards, such as landfills, industrial facilities, and polluting infrastructure, in or near communities of color, often as a result of discriminatory policy and disinvestment. It is a specific manifestation of environmental injustice rooted in structural racism." },
          { term: "Cumulative Impact", definition: "Cumulative impact refers to the combined effect of multiple environmental exposures and social stressors experienced by a community over time, which can produce health consequences greater than the sum of any single exposure evaluated in isolation. Communities facing high cumulative impact often bear layered burdens from pollution, poverty, and limited health care access." },
          { term: "Sacrifice Zone", definition: "A sacrifice zone is a geographic area, typically low-income or minority, that has been heavily polluted or degraded by industrial activity to the point that residents' health and quality of life are severely compromised, often to benefit broader economic interests. The term highlights how environmental costs are unevenly distributed across society." },
          { term: "NIMBY", definition: "NIMBY, an acronym for \"Not In My Back Yard,\" describes opposition by residents to the siting of a proposed facility, such as a landfill or treatment plant, in their own local area, even if they may not object to the facility existing elsewhere. This dynamic can contribute to environmentally hazardous facilities being pushed into communities with less political power to resist." },
          { term: "Community-Based Participatory Research", definition: "Community-based participatory research is a collaborative approach to research that equitably involves community members, researchers, and other stakeholders throughout the research process, from identifying the problem to disseminating results. It aims to combine knowledge with action to address community-identified health and environmental concerns." }
        ]
      },
      {
        id: "occ-health",
        label: "Occupational Health",
        terms: [
          { term: "Occupational Health", definition: "Occupational health is the field of public health focused on promoting and maintaining the physical, mental, and social well-being of workers by preventing hazards and diseases related to working conditions. It addresses risks arising from chemical, physical, biological, and ergonomic exposures in the workplace." },
          { term: "OSHA", definition: "The Occupational Safety and Health Administration (OSHA) is the federal agency within the U.S. Department of Labor responsible for setting and enforcing workplace safety and health standards. It was created by the Occupational Safety and Health Act of 1970 to ensure safe and healthful working conditions for employees." },
          { term: "Threshold Limit Value", definition: "A threshold limit value is an occupational exposure guideline representing the airborne concentration of a substance to which nearly all workers can be repeatedly exposed without adverse health effects, typically expressed as a time-weighted average over an eight-hour workday. These values are developed and published by professional organizations to inform workplace exposure limits." },
          { term: "Hierarchy of Controls", definition: "The hierarchy of controls is a framework for prioritizing methods to reduce workplace hazards, ranked from most to least effective: elimination, substitution, engineering controls, administrative controls, and personal protective equipment. Controls higher on the hierarchy are generally more reliable because they reduce the hazard at its source rather than relying on worker behavior." },
          { term: "Personal Protective Equipment", definition: "Personal protective equipment refers to specialized clothing or equipment worn by workers to minimize exposure to hazards, including respirators, gloves, eye protection, and protective clothing. It is considered the least effective control in the hierarchy of controls because it depends on consistent and correct use by the worker." },
          { term: "Sentinel Health Event", definition: "A sentinel health event is a preventable disease, disability, or death that serves as a warning signal indicating a potential failure in prevention or treatment within a workplace or environmental setting. Identifying such an event should prompt investigation into its underlying cause to prevent similar occurrences." }
        ]
      }
    ]
  },

  // ── BIOSTATISTICS ────────────────────────────────────────
  "biostats": {
    label: "Biostatistics",
    units: [
      {
        id: "descriptive-stats",
        label: "Descriptive Statistics",
        terms: [
          { term: "Mean", definition: "The mean is the arithmetic average of a set of values, calculated by summing all observations and dividing by the number of observations. It is sensitive to extreme values, or outliers, which can pull the mean away from where most of the data actually lie." },
          { term: "Median", definition: "The median is the middle value in a data set when all observations are ordered from smallest to largest, dividing the distribution into two equal halves. Because it is not affected by extreme values, the median is often a more appropriate measure of central tendency for skewed distributions than the mean." },
          { term: "Mode", definition: "The mode is the value that occurs most frequently in a data set, and a distribution can have one mode, more than one mode, or no mode at all if every value occurs with equal frequency. It is the only measure of central tendency that can be used with purely categorical, or nominal, data." },
          { term: "Standard Deviation", definition: "Standard deviation is a measure of the amount of variation or dispersion in a set of values, calculated as the square root of the variance, and is expressed in the same units as the original data. A small standard deviation indicates that values tend to be close to the mean, while a large one indicates greater spread." },
          { term: "Variance", definition: "Variance is a measure of how far a set of values are spread out from their mean, calculated as the average of the squared differences between each observation and the mean. Because it is expressed in squared units, variance is often converted to standard deviation for easier interpretation." },
          { term: "Skewness", definition: "Skewness describes the asymmetry of a probability distribution around its mean, with positive skew indicating a longer tail toward higher values and negative skew indicating a longer tail toward lower values. In a skewed distribution, the mean, median, and mode typically differ, and the median often better represents the center." }
        ]
      },
      {
        id: "probability",
        label: "Probability & Distributions",
        terms: [
          { term: "Probability", definition: "Probability is a numerical measure, ranging from 0 to 1, of the likelihood that a particular event will occur, with 0 indicating impossibility and 1 indicating certainty. It provides the mathematical foundation for statistical inference and hypothesis testing." },
          { term: "Normal Distribution", definition: "The normal distribution is a continuous, symmetric, bell-shaped probability distribution defined by its mean and standard deviation, in which most observations cluster around the mean. Many biological and health-related variables approximate a normal distribution, and it underlies many common statistical tests." },
          { term: "Binomial Distribution", definition: "The binomial distribution describes the probability of obtaining a specific number of successes in a fixed number of independent trials, each with the same probability of success, such as the number of patients who respond to a treatment out of a fixed sample. It is commonly used to model dichotomous, or yes/no, outcomes in epidemiologic and clinical research." },
          { term: "Poisson Distribution", definition: "The Poisson distribution models the probability of a given number of events occurring within a fixed interval of time or space, assuming events occur independently and at a constant average rate. It is frequently used in epidemiology to model rare disease counts and incidence rates." },
          { term: "Central Limit Theorem", definition: "The central limit theorem states that the distribution of sample means will approximate a normal distribution as the sample size becomes sufficiently large, regardless of the shape of the underlying population distribution. This theorem justifies the use of normal-based statistical methods even when individual data are not normally distributed." },
          { term: "Confidence Interval", definition: "A confidence interval is a range of values, calculated from sample data, that is likely to contain the true population parameter with a specified level of confidence, such as 95 percent. It reflects the precision of an estimate, with narrower intervals indicating greater precision." }
        ]
      },
      {
        id: "hypothesis-testing",
        label: "Hypothesis Testing & Inference",
        terms: [
          { term: "Null Hypothesis", definition: "The null hypothesis is a statement asserting that there is no true effect or association between the variables being studied in the underlying population, serving as the default assumption to be tested against the collected data. Statistical tests are designed to assess how compatible the observed data are with this hypothesis." },
          { term: "Alternative Hypothesis", definition: "The alternative hypothesis is a statement that contradicts the null hypothesis, proposing that a true effect, difference, or association does exist in the population being studied. Researchers seek evidence in their data strong enough to reject the null hypothesis in favor of the alternative." },
          { term: "P-Value", definition: "The p-value is the probability of observing a result as extreme as, or more extreme than, the one obtained, assuming the null hypothesis is true. A small p-value, conventionally below 0.05, suggests the observed data would be unusual under the null hypothesis, but a p-value alone does not indicate the size or importance of an effect." },
          { term: "Type I Error", definition: "A Type I error occurs when a study rejects a true null hypothesis, incorrectly concluding that an effect or association exists when it does not. The probability of committing a Type I error is denoted by alpha, most commonly set at 0.05." },
          { term: "Type II Error", definition: "A Type II error occurs when a study fails to reject a false null hypothesis, incorrectly concluding that no effect or association exists when one truly does. The probability of committing a Type II error is denoted by beta and is directly related to a study's statistical power." },
          { term: "Statistical Power", definition: "Statistical power is the probability that a study will correctly detect a true effect or association when one actually exists, calculated as one minus the probability of a Type II error. Power increases with larger sample sizes, larger true effect sizes, and less variability in the data." }
        ]
      },
      {
        id: "regression",
        label: "Regression & Correlation",
        terms: [
          { term: "Correlation Coefficient", definition: "The correlation coefficient is a statistic, typically Pearson's r, that measures the strength and direction of a linear relationship between two continuous variables, ranging from -1 to +1. A value near 0 indicates little to no linear relationship, while values close to -1 or +1 indicate a strong negative or positive relationship." },
          { term: "Linear Regression", definition: "Linear regression is a statistical technique used to model the relationship between a continuous outcome variable and one or more predictor variables by fitting a straight line that best describes the data. The resulting equation can be used to estimate the outcome for given values of the predictors and to quantify the strength of the association." },
          { term: "Logistic Regression", definition: "Logistic regression is a statistical technique used to model the relationship between one or more predictor variables and a binary outcome, estimating the probability of the outcome occurring in terms of odds. It is widely used in epidemiology to calculate adjusted odds ratios while controlling for confounding variables." },
          { term: "R-Squared", definition: "R-squared is a statistic that represents the proportion of variability in the outcome variable that is explained by the predictor variables in a regression model, ranging from 0 to 1. A higher R-squared indicates that the model accounts for more of the variation in the observed data, though it does not by itself indicate whether the model is correctly specified." },
          { term: "Multivariable Regression", definition: "Multivariable regression is a statistical method that examines the relationship between an outcome and multiple predictor variables simultaneously, allowing researchers to estimate the independent effect of one exposure while adjusting for other variables. It is a primary tool for controlling confounding in observational epidemiologic studies." },
          { term: "Confounder Adjustment", definition: "Confounder adjustment refers to statistical techniques, such as stratification or multivariable regression, used to account for the distorting effect of confounding variables so that the association between the exposure and outcome of interest can be more accurately estimated. Proper adjustment requires correctly identifying which variables are true confounders rather than mediators or colliders." }
        ]
      },
      {
        id: "sampling",
        label: "Sampling & Study Design",
        terms: [
          { term: "Random Sampling", definition: "Random sampling is a method of selecting a subset of individuals from a larger population in which every member has a known, non-zero chance of being chosen, minimizing selection bias and supporting generalizability of results. Simple random sampling is the most basic form, giving every individual an equal chance of selection." },
          { term: "Stratified Sampling", definition: "Stratified sampling involves dividing a population into distinct subgroups, or strata, based on a shared characteristic such as age or sex, and then randomly sampling from within each stratum. This method ensures adequate representation of important subgroups and can improve the precision of estimates compared to simple random sampling." },
          { term: "Convenience Sampling", definition: "Convenience sampling is a non-probability sampling method in which participants are selected based on their ease of access rather than through a random process, making the resulting sample less likely to be representative of the broader population. While quick and inexpensive, it carries a high risk of selection bias." },
          { term: "Sample Size", definition: "Sample size refers to the number of observations or participants included in a study, which must be large enough to provide adequate statistical power to detect a true effect if one exists. Sample size calculations typically depend on the expected effect size, desired significance level, and desired power." },
          { term: "Sampling Error", definition: "Sampling error is the difference between a sample statistic and the true population parameter that arises simply because a sample, rather than the entire population, was measured. Unlike bias, sampling error is a random and expected consequence of sampling and tends to decrease as sample size increases." },
          { term: "Nonresponse Bias", definition: "Nonresponse bias occurs when individuals who do not respond to a survey or study differ systematically from those who do respond, in ways that are related to the outcome being studied, distorting the study's results. High response rates alone do not guarantee the absence of nonresponse bias if non-respondents differ meaningfully from respondents." }
        ]
      }
    ]
  }

};

