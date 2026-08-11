export type Topic = {
  id: string
  title: string
}

export type Chapter = {
  id: string
  number: number
  title: string
  shortTitle: string
  topics: Topic[]
}

export const examMeta = {
  title: 'Pediatric Exam Three',
  year: '2026',
  questionCount: 65,
  formats: ['multiple choice', 'fill-in-the-blank', 'select all that apply', 'Bowtie'],
}

export const chapters: Chapter[] = [
  {
    id: 'gi',
    number: 45,
    title: 'Nursing Care of a Family When a Child Has a Gastrointestinal Disorder',
    shortTitle: 'GI Disorders',
    topics: [
      { id: 'gi-assess', title: 'Assessment of the Gastrointestinal System' },
      { id: 'gastritis', title: 'Gastritis' },
      { id: 'newborn-nutrition', title: 'Newborn Nutrition' },
      { id: 'n-v', title: 'Nausea / Vomiting' },
      { id: 'pyloric', title: 'Pyloric Stenosis' },
      { id: 'fluid', title: 'Fluid Volume Excess / Deficit' },
      { id: 'gi-acid', title: 'Acid-Base Balance' },
    ],
  },
  {
    id: 'renal',
    number: 46,
    title: 'Nursing Care of a Family When a Child Has a Renal or Urinary Tract Disorder',
    shortTitle: 'Renal & Urinary',
    topics: [
      { id: 'renal-assess', title: 'Assessment of the Renal System' },
      { id: 'circumcision', title: 'Circumcision' },
      { id: 'hypospadias', title: 'Hypospadias / Epispadias / Chordee' },
      { id: 'enuresis', title: 'Enuresis' },
      { id: 'diarrhea', title: 'Diarrhea' },
      { id: 'uti', title: 'Urinary Tract Infection' },
      { id: 'renal-acid', title: 'Acid-Base Balance' },
      { id: 'transplant', title: 'Organ Transplants' },
    ],
  },
  {
    id: 'repro',
    number: 47,
    title: 'Nursing Care of a Family When a Child Has a Reproductive Disorder',
    shortTitle: 'Reproductive',
    topics: [{ id: 'sti', title: 'Sexually Transmitted Infections' }],
  },
  {
    id: 'endocrine',
    number: 48,
    title: 'Nursing Care of a Family When a Child Has an Endocrine or Metabolic Disorder',
    shortTitle: 'Endocrine & Metabolic',
    topics: [
      { id: 'diabetes', title: 'Diabetes (Type 1, 2, DKA)' },
      { id: 'hypo-hyper', title: 'Hypoglycemia / Hyperglycemia' },
      { id: 'bolus', title: 'Correction / Meal Bolus / Basal Bolus' },
      { id: 'isf', title: 'Insulin Sensitivity Factor / Carbohydrate Coverage' },
      { id: 'target-bg', title: 'Target Blood Glucose' },
      { id: 'bg-monitor', title: 'Blood Glucose Monitoring' },
      { id: 'precocious', title: 'Precocious Puberty' },
      { id: 'metab-findings', title: 'Expected Findings for Regulations and Metabolism' },
    ],
  },
  {
    id: 'neuro',
    number: 49,
    title: 'Nursing Care of a Family When a Child Has a Neurological Disorder',
    shortTitle: 'Neurological',
    topics: [
      { id: 'seizures', title: 'Seizures / Epilepsy' },
      { id: 'head-injury-neuro', title: 'Head Injury' },
      { id: 'sci', title: 'Spinal Cord Injuries' },
      { id: 'mg', title: 'Myasthenia Gravis' },
      { id: 'meningitis', title: 'Meningitis' },
      { id: 'sensory', title: 'Expected Findings for Sensory Perceptual' },
      { id: 'mental-status', title: 'Assessment of Mental Status' },
      { id: 'neuro-assess', title: 'Assessment of the Neurological System' },
    ],
  },
  {
    id: 'vision',
    number: 50,
    title: 'Nursing Care of a Family When a Child Has a Vision or Hearing Disorder',
    shortTitle: 'Vision & Hearing',
    topics: [
      { id: 'eyes-ears', title: 'Assessment of the Eyes and Ears' },
      { id: 'eye-injury', title: 'Eye Injuries' },
      { id: 'otitis', title: 'Otitis Media' },
      { id: 'conjunctivitis', title: 'Conjunctivitis' },
    ],
  },
  {
    id: 'msk',
    number: 51,
    title: 'Nursing Care of a Family When a Child Has a Musculoskeletal Disorder',
    shortTitle: 'Musculoskeletal',
    topics: [
      { id: 'msk-assess', title: 'Assessment of the Musculoskeletal System' },
      { id: 'fractures', title: 'Fractures' },
      { id: 'md', title: 'Muscular Dystrophy' },
      { id: 'mobility', title: 'Mobility Techniques (Positioning and Transfers)' },
      { id: 'compartment', title: 'Compartment Syndrome' },
      { id: 'assistive', title: 'Use of Assistive Mobility Devices' },
    ],
  },
  {
    id: 'injury',
    number: 52,
    title: 'Nursing Care of a Family When a Child Has an Unintentional Injury',
    shortTitle: 'Unintentional Injury',
    topics: [
      { id: 'home-safety', title: 'Environmental / Home Safety' },
      { id: 'accident', title: 'Accident / Injury Prevention' },
      { id: 'med-mgmt', title: 'Medication Management' },
      { id: 'poisonings', title: 'Poisonings' },
      { id: 'trauma', title: 'Unintentional Injury and Trauma' },
      { id: 'burns', title: 'Burns' },
      { id: 'head-injury-trauma', title: 'Head Injury' },
      { id: 'resp-failure', title: 'Respiratory Failure' },
    ],
  },
  {
    id: 'maltreatment',
    number: 55,
    title: 'Nursing Care of a Family in Crisis: Maltreatment and Violence in the Family',
    shortTitle: 'Maltreatment & Violence',
    topics: [{ id: 'child-abuse', title: 'Child Abuse' }],
  },
]

export const coreFocus = [
  {
    id: 'milestones',
    title: 'Developmental Milestones',
    detail: 'Know the expectations for each specific age group.',
  },
  {
    id: 'assessment',
    title: 'Pediatric Assessment',
    detail:
      'Age-specific norms for height, weight, BMI, head circumference; puberty and Tanner staging; vital signs (normal vs abnormal) by age.',
  },
  {
    id: 'immunizations',
    title: 'Immunization Schedules',
    detail: 'Primary and modified schedules for each age group.',
  },
]

export const diseaseFramework = [
  { id: 'patho', title: 'Pathophysiology', detail: 'Underlying etiology and mechanism of the disease.' },
  { id: 'clinical', title: 'Clinical Presentation', detail: 'Manifestations and diagnostic testing.' },
  { id: 'treatment', title: 'Treatment Protocols', detail: 'Pharmacological and non-pharmacological interventions.' },
  { id: 'nursing', title: 'Nursing Process', detail: 'Application of the nursing process specific to the disorder.' },
]

export const clinicalJudgment = [
  'Recognize cues → analyze cues → prioritize hypotheses → generate solutions → take action → evaluate outcomes.',
  'Practice triaging patients.',
  'Patient-centered care, priority setting, foundational thinking, and clinical application.',
  'Manage acute and chronic problems and emergency situations.',
]
