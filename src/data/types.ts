export type ContentBlock = {
  heading?: string
  body: string
}

export type Topic = {
  id: string
  title: string
}

export type Chapter = {
  id: string
  number: number | null
  title: string
  shortTitle: string
  topics: Topic[]
}

export type EmphasisItem = {
  id: string
  label: string
  detail: string
  /** Topic ids and/or chapter ids to highlight when this switch is on */
  highlights: string[]
}

export const examMeta = {
  title: 'Pediatric Final Exam',
  year: '2026',
  questionCount: 65,
  formats: ['multiple choice', 'fill-in-the-blank', 'select all that apply', 'Bowtie'],
  note: 'Chapters 45–52 & 55 | Prof. Tse-Valcin | Fully cumulative (Exams 1–3)',
}

export const diseaseFramework = [
  { id: 'patho', title: 'Pathophysiology', detail: 'Underlying etiology and mechanism of the disease.' },
  { id: 'clinical', title: 'Clinical Presentation', detail: 'Manifestations and diagnostic testing.' },
  { id: 'treatment', title: 'Treatment Protocols', detail: 'Pharmacological and non-pharmacological interventions.' },
  { id: 'nursing', title: 'Nursing Process', detail: 'Application of the nursing process specific to the disorder.' },
]

export const clinicalJudgment = [
  'Recognize cues → analyze cues → prioritize hypotheses → generate solutions → take action → evaluate outcomes.',
  'Prioritize: ABCs → Maslow → safety → acute/unstable before chronic/stable. Assess before intervene when no emergency.',
  'Practice triaging patients.',
  'Patient-centered care, priority setting, foundational thinking, and clinical application.',
  'Manage acute and chronic problems and emergency situations.',
  'Delegate stable/routine tasks (VS on stable patients, I&O, feeding, positioning, ambulation) to UAP; keep assessment, teaching, evaluation, and unstable patients.',
]
