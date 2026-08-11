import { useEffect, useMemo, useState } from 'react'
import { ChapterPanel } from './components/ChapterPanel'
import { EmphasisPanel } from './components/EmphasisPanel'
import { FocusPanel } from './components/FocusPanel'
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

const emphasisStorageKey = 'pediatrics-nursing-guide:emphasis'

function loadSavedEmphasis(): Set<string> {
  try {
    const saved = JSON.parse(localStorage.getItem(emphasisStorageKey) ?? '[]')
    const validIds = new Set(emphasisItems.map((item) => item.id))
    return new Set(
      Array.isArray(saved)
        ? saved.filter((id): id is string => typeof id === 'string' && validIds.has(id))
        : [],
    )
  } catch {
    return new Set()
  }
}

function App() {
  const [openChapterId, setOpenChapterId] = useState<string | null>(chapters[0]?.id ?? null)
  const [selection, setSelection] = useState<Selection | null>(null)
  const [activeEmphasis, setActiveEmphasis] = useState<Set<string>>(loadSavedEmphasis)
  const [emphasisOpen, setEmphasisOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(emphasisStorageKey, JSON.stringify([...activeEmphasis]))
  }, [activeEmphasis])

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
      <header className="brand-bar" id="study-guide-top">
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
          {selection ? (
            <FocusPanel
              selected={selection}
              onClose={() => setSelection(null)}
            />
          ) : (
            <>
              <div className="win-inset">
                <p className="lede">
                  {examMeta.note}. Open a chapter, then choose one topic for a
                  focused reading view. Topics with source content appear first;
                  topics still awaiting material are clearly marked.
                </p>
              </div>

              <div className="chapter-list">
                {chapters.map((chapter) => (
                  <ChapterPanel
                    key={chapter.id}
                    chapter={chapter}
                    open={openChapterId === chapter.id}
                    selectedTopicId={null}
                    highlighted={highlightedIds.has(chapter.id)}
                    highlightedTopicIds={highlightedIds}
                    onToggle={() =>
                      setOpenChapterId((current) =>
                        current === chapter.id ? null : chapter.id,
                      )
                    }
                    onSelectTopic={(topicId, topicTitle, chapterTitle) => {
                      setSelection({ topicId, topicTitle, chapterTitle })
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </WinWindow>

        {!selection ? (
          <WinWindow title="Professor high-yield">
            <EmphasisPanel
              activeIds={activeEmphasis}
              expanded={emphasisOpen}
              onToggle={toggleEmphasis}
              onClear={() => setActiveEmphasis(new Set())}
              onToggleExpanded={() => setEmphasisOpen((current) => !current)}
              onGoToGuide={() =>
                document
                  .getElementById('study-guide-top')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            />
          </WinWindow>
        ) : null}
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
