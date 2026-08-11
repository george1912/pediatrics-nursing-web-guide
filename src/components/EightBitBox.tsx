import { motion } from 'framer-motion'

/** Compact CRT-style monitor decoration for the study page. */
export function EightBitBox() {
  return (
    <div className="bitbox" aria-label="Study page status monitor">
      <div className="bitbox-screen">
        <motion.svg
          className="pixel-art"
          viewBox="0 0 28 28"
          shapeRendering="crispEdges"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* background dither */}
          <rect width="28" height="28" fill="#0d0d0d" />
          <g fill="#2a2a2a">
            <rect x="2" y="2" width="1" height="1" />
            <rect x="4" y="4" width="1" height="1" />
            <rect x="22" y="3" width="1" height="1" />
            <rect x="24" y="5" width="1" height="1" />
            <rect x="3" y="22" width="1" height="1" />
            <rect x="23" y="23" width="1" height="1" />
          </g>

          {/* window frame */}
          <rect x="4" y="5" width="20" height="16" fill="#e8e8e0" />
          <rect x="4" y="5" width="20" height="3" fill="#111" />
          <rect x="18" y="6" width="2" height="1" fill="#e8e8e0" />
          <rect x="21" y="6" width="2" height="1" fill="#e8e8e0" />

          {/* study document icon */}
          <rect x="10" y="10" width="8" height="10" fill="#111" />
          <rect x="11" y="11" width="6" height="8" fill="#e8e8e0" />
          <rect x="12" y="13" width="4" height="1" fill="#111" />
          <rect x="12" y="15" width="4" height="1" fill="#111" />
          <rect x="12" y="17" width="3" height="1" fill="#111" />
        </motion.svg>
      </div>
      <p className="bitbox-caption">NURSING PEDIATRICS · STUDY</p>
    </div>
  )
}
