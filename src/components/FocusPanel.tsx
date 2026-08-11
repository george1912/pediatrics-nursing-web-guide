import {
  clinicalJudgment,
  coreFocus,
  diseaseFramework,
  examMeta,
} from '../data/exam3'

type FocusPanelProps = {
  selected: { topicTitle: string; chapterTitle: string } | null
}

export function FocusPanel({ selected }: FocusPanelProps) {
  return (
    <>
      <div className="win-inset detail-pane">
        <h3>{selected ? selected.topicTitle : 'Core focus areas'}</h3>
        <p className="lede">
          {selected
            ? `Pinned under ${selected.chapterTitle}. Run this topic through patho → presentation → treatment → nursing process.`
            : 'Open a chapter, shake a topic open, then study it through the disease-management frame.'}
        </p>
      </div>

      <div className="framework-grid">
        {(selected ? diseaseFramework : coreFocus).map((item) => (
          <div className="framework-card" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="win-inset">
        <h3 style={{ fontSize: '1.05rem', marginBottom: '0.45rem' }}>
          Clinical judgment
        </h3>
        <ul className="status-list">
          {clinicalJudgment.map((line) => (
            <li key={line}>
              <span className="status-dot on" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
          {examMeta.questionCount} questions · {examMeta.formats.join(' · ')}
        </p>
      </div>
    </>
  )
}
