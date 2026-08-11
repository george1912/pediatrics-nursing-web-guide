import { AnimatePresence, motion } from 'framer-motion'
import type { Chapter } from '../data/exam3'
import { TopicChip } from './TopicChip'

type ChapterPanelProps = {
  chapter: Chapter
  open: boolean
  selectedTopicId: string | null
  onToggle: () => void
  onSelectTopic: (topicId: string, topicTitle: string, chapterTitle: string) => void
}

export function ChapterPanel({
  chapter,
  open,
  selectedTopicId,
  onToggle,
  onSelectTopic,
}: ChapterPanelProps) {
  return (
    <article className={`chapter${open ? ' is-open' : ''}`}>
      <motion.button
        type="button"
        className="chapter-header"
        aria-expanded={open}
        onClick={onToggle}
        whileTap={{ scale: 0.995 }}
      >
        <div className="chapter-copy">
          <p className="chapter-kicker">Chapter {chapter.number}</p>
          <h3>{chapter.shortTitle}</h3>
          <p className="chapter-meta">
            {chapter.topics.length} topic{chapter.topics.length === 1 ? '' : 's'}
          </p>
        </div>
        <span className="chapter-chevron" aria-hidden="true">
          {open ? '▼' : '▶'}
        </span>
      </motion.button>

      <div className="chapter-body">
        <div className="chapter-body-inner">
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="topic-grid"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
              >
                {chapter.topics.map((topic) => (
                  <TopicChip
                    key={topic.id}
                    label={topic.title}
                    active={selectedTopicId === topic.id}
                    onSelect={() =>
                      onSelectTopic(topic.id, topic.title, chapter.shortTitle)
                    }
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  )
}
