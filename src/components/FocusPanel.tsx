import { getTopicContent } from '../data/content'
import { diseaseFramework } from '../data/types'

type FocusPanelProps = {
  selected: {
    topicId: string
    topicTitle: string
    chapterTitle: string
  }
  onClose: () => void
}

export function FocusPanel({ selected, onClose }: FocusPanelProps) {
  const blocks = getTopicContent(selected.topicId)

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

      {blocks.length > 0 ? (
        <div className="content-blocks">
          {blocks.map((block, index) => (
            <article className="content-block" key={`${block.heading ?? 'block'}-${index}`}>
              {block.heading ? <h4>{block.heading}</h4> : null}
              <p>{block.body}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="win-inset">
          <p className="lede">
            No study-guide text was placed in this bucket yet. Use the outline
            and emphasis switches to find related filled topics.
          </p>
        </div>
      )}

      <div className="framework-grid">
        {diseaseFramework.map((item) => (
          <div className="framework-card" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
