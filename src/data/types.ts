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
  title: 'Pediatric Nursing Study Guide',
  year: '2026',
  questionCount: 65,
  formats: ['multiple choice', 'fill-in-the-blank', 'select all that apply', 'Bowtie'],
  note: 'Chapters 45–52 & 55 | Fully cumulative (Exams 1–3)',
}
