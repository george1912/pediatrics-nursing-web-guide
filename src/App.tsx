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
          <h1>PED</h1>
          <p className="tag">
            Interactive pediatrics study desk — Exam 3 outline, built like an old
            machine that still looks sharp.
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
        <WinWindow title={`${examMeta.title} Study Guide.hlp`}>
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
              Focus Frame
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
                  Subjects sit under chapter umbrellas. Hover a topic to make it
                  shake, click to pin it into the focus frame.
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
          <WinWindow title="Buddy List">
            <div className="win-inset">
              <ul className="status-list">
                <li>
                  <span className="status-dot on" aria-hidden="true" />
                  <span>GI · Renal · Endocrine online</span>
                </li>
                <li>
                  <span className="status-dot on" aria-hidden="true" />
                  <span>Neuro · MSK · Injury queued</span>
                </li>
                <li>
                  <span className="status-dot" aria-hidden="true" />
                  <span>
                    {selection
                      ? `Active: ${selection.topicTitle}`
                      : 'No topic pinned yet'}
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
          <span>Start</span>
        </div>
        <div>NRBS 4110 · Nursing Practice with Children</div>
        <div>{selection ? 'Topic pinned' : 'Idle'}</div>
      </footer>
    </div>
  )
}

export default App
