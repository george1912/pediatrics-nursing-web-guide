import { useMemo, useState } from 'react'
import { ChapterPanel } from './components/ChapterPanel'
import { EightBitBox } from './components/EightBitBox'
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
  const [view, setView] = useState<'chapters' | 'focus'>('chapters')

  const topicCount = useMemo(
    () => chapters.reduce((sum, chapter) => sum + chapter.topics.length, 0),
    [],
  )

  return (
    <div className="desktop">
      <header className="brand-bar">
        <div className="brand-mark">
          <h1>Nursing Pediatrics</h1>
          <p className="tag">
            Study page for pediatric nursing exam review — interactive chapter
            outline for Exam 3.
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
          <div className="toolbar" role="toolbar" aria-label="Guide views">
            <button
              type="button"
              className="pixel-btn"
              aria-pressed={view === 'chapters'}
              onClick={() => setView('chapters')}
            >
              Chapters
            </button>
            <button
              type="button"
              className="pixel-btn"
              aria-pressed={view === 'focus'}
              onClick={() => setView('focus')}
            >
              Study Focus
            </button>
            <button
              type="button"
              className="pixel-btn"
              onClick={() => {
                setOpenChapterId(null)
                setSelection(null)
              }}
            >
              Clear
            </button>
          </div>

          {view === 'chapters' ? (
            <>
              <div className="win-inset">
                <p className="lede">
                  Topics are grouped under each chapter. Hover a topic for a
                  quick highlight, then click to open it in Study Focus.
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
                      setSelection({ topicId, topicTitle, chapterTitle })
                      setView('focus')
                    }}
                  />
                ))}
              </div>
            </>
          ) : (
            <FocusPanel
              selected={
                selection
                  ? {
                      topicTitle: selection.topicTitle,
                      chapterTitle: selection.chapterTitle,
                    }
                  : null
              }
            />
          )}
        </WinWindow>

        <aside className="side-stack">
          <EightBitBox />
          <WinWindow title="Outline Status">
            <div className="win-inset">
              <ul className="status-list">
                <li>
                  <span className="status-dot on" aria-hidden="true" />
                  <span>GI · Renal · Endocrine included</span>
                </li>
                <li>
                  <span className="status-dot on" aria-hidden="true" />
                  <span>Neuro · MSK · Injury included</span>
                </li>
                <li>
                  <span className="status-dot" aria-hidden="true" />
                  <span>
                    {selection
                      ? `Selected: ${selection.topicTitle}`
                      : 'No topic selected yet'}
                  </span>
                </li>
              </ul>
            </div>
          </WinWindow>
        </aside>
      </main>

      <footer className="taskbar">
        <div className="taskbar-start" aria-hidden="true">
          <span>■</span>
          <span>Menu</span>
        </div>
        <div>NRBS 4110 · Nursing Practice with Children</div>
        <div>{selection ? 'Topic selected' : 'Ready'}</div>
      </footer>
    </div>
  )
}

export default App
