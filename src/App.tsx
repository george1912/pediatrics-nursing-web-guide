import { useMemo, useState } from 'react'
import { ChapterPanel } from './components/ChapterPanel'
import { EmphasisPanel } from './components/EmphasisPanel'
import { WinWindow } from './components/WinWindow'
import { chapters } from './data/chapters'
import { emphasisItems } from './data/emphasis'
import { examMeta } from './data/types'
import type { EmphasisItem } from './data/types'
import './index.css'

type Selection = {
  topicId: string
  topicTitle: string
  chapterTitle: string
}

function App() {
  const [openChapterId, setOpenChapterId] = useState<string | null>(chapters[0]?.id ?? null)
  const [selection, setSelection] = useState<Selection | null>(null)
  const [activeEmphasis, setActiveEmphasis] = useState<Set<string>>(() => new Set())

  const topicCount = useMemo(
    () => chapters.reduce((sum, chapter) => sum + chapter.topics.length, 0),
    [],
  )

  const highlightedIds = useMemo(() => {
    const ids = new Set<string>()
    for (const item of emphasisItems) {
      if (!activeEmphasis.has(item.id)) continue
      for (const target of item.highlights) ids.add(target)
    }
    return ids
  }, [activeEmphasis])

  function toggleEmphasis(item: EmphasisItem) {
    setActiveEmphasis((current) => {
      const next = new Set(current)
      if (next.has(item.id)) next.delete(item.id)
      else next.add(item.id)
      return next
    })
  }

  return (
    <div className="desktop">
      <header className="brand-bar">
        <div className="brand-mark">
          <h1>Pediatrics Nursing Web Guide</h1>
          <p className="tag">
            Pediatric nursing exam review — Final Exam chapter outline and
            study buckets.
          </p>
        </div>
        <div className="brand-meta">
          <div>{examMeta.title} · {examMeta.year}</div>
          <div>
            {chapters.length} sections · {topicCount} topics
          </div>
        </div>
      </header>

      <main className="workspace">
        <WinWindow title={`${examMeta.title} Study Guide`}>
          <div className="win-inset">
            <p className="lede">
              {examMeta.note}. Open a chapter, select a topic to read the
              study-guide text directly beneath it. Topics with source content
              appear first; topics still awaiting material are clearly marked.
            </p>
          </div>

          <div className="chapter-list">
            {chapters.map((chapter) => (
              <ChapterPanel
                key={chapter.id}
                chapter={chapter}
                open={openChapterId === chapter.id}
                selectedTopicId={selection?.topicId ?? null}
                highlighted={highlightedIds.has(chapter.id)}
                highlightedTopicIds={highlightedIds}
                selected={
                  selection && chapter.topics.some((topic) => topic.id === selection.topicId)
                    ? selection
                    : null
                }
                onToggle={() =>
                  setOpenChapterId((current) =>
                    current === chapter.id ? null : chapter.id,
                  )
                }
                onSelectTopic={(topicId, topicTitle, chapterTitle) => {
                  setSelection((current) =>
                    current?.topicId === topicId
                      ? null
                      : { topicId, topicTitle, chapterTitle },
                  )
                }}
                onCloseTopic={() => setSelection(null)}
              />
            ))}
          </div>
        </WinWindow>

        <WinWindow title="Professor high-yield">
          <EmphasisPanel
            activeIds={activeEmphasis}
            onToggle={toggleEmphasis}
            onClear={() => setActiveEmphasis(new Set())}
          />
        </WinWindow>
      </main>

      <footer className="taskbar">
        <div>NRBS 4110 · Nursing Practice with Children</div>
        <div>
          {activeEmphasis.size > 0
            ? `${activeEmphasis.size} emphasis on`
            : selection
              ? selection.topicTitle
              : `${topicCount} topics`}
        </div>
      </footer>
    </div>
  )
}

export default App
