import { useState } from 'react'
import { motion } from 'framer-motion'

type TopicChipProps = {
  label: string
  active?: boolean
  emphasized?: boolean
  filled: boolean
  onSelect: () => void
}

export function TopicChip({
  label,
  active = false,
  emphasized = false,
  filled,
  onSelect,
}: TopicChipProps) {
  const [shaking, setShaking] = useState(false)

  return (
    <motion.button
      type="button"
      className={`topic${active ? ' is-active' : ''}${emphasized ? ' is-emphasized' : ''}${filled ? ' is-filled' : ' is-incomplete'}${shaking ? ' shake' : ''}`}
      aria-pressed={active}
      onMouseEnter={() => setShaking(true)}
      onAnimationEnd={() => setShaking(false)}
      onClick={() => {
        setShaking(true)
        onSelect()
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 22 }}
    >
      <span className="topic-label">{label}</span>
      <span className="topic-status">{filled ? 'Content ready' : 'Needs source'}</span>
    </motion.button>
  )
}
