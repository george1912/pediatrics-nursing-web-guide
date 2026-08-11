import { getTopicContent } from '../data/content'

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
        <div className="content-empty">
          <strong>Needs source material</strong>
          <p className="lede">
            This topic appears in the outline, but the supplied study guide does
            not include a distinct section for it yet.
          </p>
        </div>
      )}
    </section>
  )
}
