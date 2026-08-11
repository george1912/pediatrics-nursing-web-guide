import { useState } from 'react'
import { motion } from 'framer-motion'

type TopicChipProps = {
  label: string
  active?: boolean
  onSelect: () => void
}

function FolderIcon() {
  return (
    <svg className="topic-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 7.5h6.2L11 9.5H21v9.5H3V7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M3 11h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function TopicChip({ label, active = false, onSelect }: TopicChipProps) {
  const [shaking, setShaking] = useState(false)

  return (
    <motion.button
      type="button"
      className={`topic${active ? ' is-active' : ''}${shaking ? ' shake' : ''}`}
      aria-pressed={active}
      onMouseEnter={() => setShaking(true)}
      onAnimationEnd={() => setShaking(false)}
      onClick={() => {
        setShaking(true)
        onSelect()
      }}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 18 }}
    >
      <FolderIcon />
      <span className="topic-label">{label}</span>
    </motion.button>
  )
}
