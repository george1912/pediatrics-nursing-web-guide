import {
  clinicalJudgment,
  diseaseFramework,
  examMeta,
} from '../data/exam3'

type FocusPanelProps = {
  selected: { topicTitle: string; chapterTitle: string }
  onClose: () => void
}

export function FocusPanel({ selected, onClose }: FocusPanelProps) {
  return (
    <section className="focus-block" aria-label="Study focus">
      <div className="focus-block-head">
        <div>
          <p className="chapter-kicker">{selected.chapterTitle}</p>
          <h3>{selected.topicTitle}</h3>
        </div>
        <button type="button" className="pixel-btn" onClick={onClose}>
          Close topic
        </button>
      </div>

      <p className="lede">
        Review this topic through pathophysiology → clinical presentation →
        treatment → nursing process.
      </p>

      <div className="framework-grid">
        {diseaseFramework.map((item) => (
          <div className="framework-card" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="win-inset">
        <h3 className="focus-subhead">Clinical judgment</h3>
        <ul className="status-list">
          {clinicalJudgment.map((line) => (
            <li key={line}>
              <span className="status-dot on" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="focus-exam-note">
          {examMeta.questionCount} questions · {examMeta.formats.join(' · ')}
        </p>
      </div>
    </section>
  )
}
