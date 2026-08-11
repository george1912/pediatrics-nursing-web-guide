import { AnimatePresence, motion } from 'framer-motion'
import { getTopicContent } from '../data/content'
import type { Chapter } from '../data/types'
import { TopicChip } from './TopicChip'

type ChapterPanelProps = {
  chapter: Chapter
  open: boolean
  selectedTopicId: string | null
  highlighted: boolean
  highlightedTopicIds: Set<string>
  onToggle: () => void
  onSelectTopic: (topicId: string, topicTitle: string, chapterTitle: string) => void
}

export function ChapterPanel({
  chapter,
  open,
  selectedTopicId,
  highlighted,
  highlightedTopicIds,
  onToggle,
  onSelectTopic,
}: ChapterPanelProps) {
  const readyTopics = chapter.topics.filter((topic) => getTopicContent(topic.id).length > 0)
  const incompleteTopics = chapter.topics.filter(
    (topic) => getTopicContent(topic.id).length === 0,
  )
  const readyCount = readyTopics.length

  return (
    <article
      className={`chapter${open ? ' is-open' : ''}${highlighted ? ' is-emphasized' : ''}`}
    >
      <motion.button
        type="button"
        className="chapter-header"
        aria-expanded={open}
        onClick={onToggle}
        whileTap={{ scale: 0.995 }}
      >
        <div className="chapter-copy">
          <p className="chapter-kicker">
            {chapter.number == null ? 'Extra' : `Chapter ${chapter.number}`}
          </p>
          <h3>{chapter.shortTitle}</h3>
          <p className="chapter-meta">
            {readyCount} ready · {chapter.topics.length} total
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
                <p className="topic-group-title">Study guide content</p>
                {readyTopics.map((topic) => (
                  <TopicChip
                    key={topic.id}
                    label={topic.title}
                    active={selectedTopicId === topic.id}
                    emphasized={highlightedTopicIds.has(topic.id) || highlighted}
                    filled
                    onSelect={() =>
                      onSelectTopic(topic.id, topic.title, chapter.shortTitle)
                    }
                  />
                ))}
                {incompleteTopics.length > 0 ? (
                  <>
                    <p className="topic-group-title is-incomplete">
                      Awaiting source material
                    </p>
                    {incompleteTopics.map((topic) => (
                      <TopicChip
                        key={topic.id}
                        label={topic.title}
                        active={selectedTopicId === topic.id}
                        emphasized={highlightedTopicIds.has(topic.id) || highlighted}
                        filled={false}
                        onSelect={() =>
                          onSelectTopic(topic.id, topic.title, chapter.shortTitle)
                        }
                      />
                    ))}
                  </>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  )
}
