import type { ReactNode } from 'react'
import { getTopicContent } from '../data/content'
import type { ContentBlock } from '../data/types'

type FocusPanelProps = {
  selected: {
    topicId: string
    topicTitle: string
    chapterTitle: string
  }
  onClose: () => void
}

const importantTerms =
  /(\b(?:FIRST|BEFORE|AFTER|NOT|NEVER|NPO|DKA|ABCs?|priority|emergency|life-threatening|immediately|report|notify provider|do not|hallmark|high-yield)\b)/gi
const exactImportantTerm =
  /^(?:FIRST|BEFORE|AFTER|NOT|NEVER|NPO|DKA|ABCs?|priority|emergency|life-threatening|immediately|report|notify provider|do not|hallmark|high-yield)$/i

function emphasizeTerms(text: string): ReactNode[] {
  return text.split(importantTerms).map((part, index) =>
    exactImportantTerm.test(part) ? (
      <strong className="key-term" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

function StudyText({ body }: { body: string }) {
  const lines = body.split('\n').filter((line) => line.trim().length > 0)

  if (lines.length > 1) {
    return (
      <div className="study-lines">
        {lines.map((line, index) => {
          const cleanLine = line.replace(/^[•■]\s*/, '')
          const separator = cleanLine.includes(' | ') ? ' | ' : ' — '
          const columns = cleanLine.split(separator)
          const isBullet = /^[•■]/.test(line)

          if (!isBullet && columns.length > 1) {
            return (
              <div className="study-row" key={`${line}-${index}`}>
                {columns.map((column, columnIndex) => (
                  <span
                    className={columnIndex === 0 ? 'study-row-label' : undefined}
                    key={`${column}-${columnIndex}`}
                  >
                    {emphasizeTerms(column)}
                  </span>
                ))}
              </div>
            )
          }

          return (
            <p className="study-bullet" key={`${line}-${index}`}>
              <span aria-hidden="true">■</span>
              <span>{emphasizeTerms(cleanLine)}</span>
            </p>
          )
        })}
      </div>
    )
  }

  const paragraphs =
    body.length > 260
      ? body.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(Boolean)
      : [body]

  return (
    <div className="study-prose">
      {paragraphs.map((paragraph, index) => {
        const colonIndex = paragraph.indexOf(':')
        const hasLead = colonIndex > 0 && colonIndex < 48

        return (
          <p key={`${paragraph}-${index}`}>
            {hasLead ? (
              <>
                <strong>{paragraph.slice(0, colonIndex + 1)}</strong>
                {emphasizeTerms(paragraph.slice(colonIndex + 1))}
              </>
            ) : (
              emphasizeTerms(paragraph)
            )}
          </p>
        )
      })}
    </div>
  )
}

function blockTone(block: ContentBlock): string {
  const heading = block.heading?.toLowerCase() ?? ''
  if (/emergency|don't miss|do not|wrong order|priority/.test(heading)) return ' is-alert'
  if (/high-yield|key point|quick hit|classic link/.test(heading)) return ' is-high-yield'
  if (/management|treatment|teaching|nursing/.test(heading)) return ' is-action'
  return ''
}

export function FocusPanel({ selected, onClose }: FocusPanelProps) {
  const blocks = getTopicContent(selected.topicId)

  return (
    <section className="focus-block" aria-label="Study focus">
      <div className="focus-block-head">
        <div>
          <p className="focus-eyebrow">Focused study · {selected.chapterTitle}</p>
          <h3>{selected.topicTitle}</h3>
        </div>
        <button type="button" className="pixel-btn" onClick={onClose}>
          ← Back to topics
        </button>
      </div>

      {blocks.length > 0 ? (
        <div className="content-blocks">
          {blocks.map((block, index) => (
            <article
              className={`content-block${blockTone(block)}`}
              key={`${block.heading ?? 'block'}-${index}`}
            >
              {block.heading ? <h4>{block.heading}</h4> : null}
              <StudyText body={block.body} />
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

      <button type="button" className="focus-back-fab" onClick={onClose}>
        ← Back to topics
      </button>
    </section>
  )
}
