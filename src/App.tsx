import { useMemo, useState } from 'react'
import { ChapterPanel } from './components/ChapterPanel'
import { FocusPanel } from './components/FocusPanel'
import { WinWindow } from './components/WinWindow'
import { chapters, examMeta } from './data/exam3'
import './index.css'

type Selection = {
  topicId: string
  topicTitle: string
  chapterTitle: string
}

function App() {
  const [openChapterId, setOpenChapterId] = useState<string | null>(chapters[0]?.id ?? null)
  const [selection, setSelection] = useState<Selection | null>(null)

  const topicCount = useMemo(
    () => chapters.reduce((sum, chapter) => sum + chapter.topics.length, 0),
    [],
  )

  return (
    <div className="desktop">
      <header className="brand-bar">
        <div className="brand-mark">
          <h1>Pediatrics Nursing Web Guide</h1>
          <p className="tag">
            Pediatric nursing exam review — Exam 3 chapter outline.
          </p>
        </div>
        <div className="brand-meta">
          <div>{examMeta.title} · {examMeta.year}</div>
          <div>
            {chapters.length} chapters · {topicCount} topics
          </div>
        </div>
      </header>

      <main className="workspace">
        <WinWindow title={`${examMeta.title} Study Guide`}>
          <div className="win-inset">
            <p className="lede">
              Open a chapter to see its topics. Select a topic to review the
              study framework for that subject.
            </p>
          </div>

          <div className="chapter-list">
            {chapters.map((chapter) => (
              <ChapterPanel
                key={chapter.id}
                chapter={chapter}
                open={openChapterId === chapter.id}
                selectedTopicId={selection?.topicId ?? null}
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
              />
            ))}
          </div>

          {selection && (
            <FocusPanel
              selected={{
                topicTitle: selection.topicTitle,
                chapterTitle: selection.chapterTitle,
              }}
              onClose={() => setSelection(null)}
            />
          )}
        </WinWindow>
      </main>

      <footer className="taskbar">
        <div>NRBS 4110 · Nursing Practice with Children</div>
        <div>{selection ? selection.topicTitle : `${topicCount} topics`}</div>
      </footer>
    </div>
  )
}

export default App
