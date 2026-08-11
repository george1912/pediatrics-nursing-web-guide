import { motion } from 'framer-motion'

/** Tiny CRT with an 8-bit pediatric nurse / bedside vibe — pure SVG pixels. */
export function EightBitBox() {
  return (
    <div className="bitbox" aria-label="8-bit status monitor">
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

          {/* little patient figure */}
          <rect x="11" y="11" width="6" height="5" fill="#111" />
          <rect x="12" y="10" width="4" height="1" fill="#111" />
          <rect x="12" y="12" width="1" height="1" fill="#e8e8e0" />
          <rect x="15" y="12" width="1" height="1" fill="#e8e8e0" />
          <rect x="13" y="14" width="2" height="1" fill="#e8e8e0" />

          {/* heart blip */}
          <motion.g
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          >
            <rect x="20" y="12" width="2" height="1" fill="#111" />
            <rect x="19" y="13" width="1" height="1" fill="#111" />
            <rect x="22" y="13" width="1" height="1" fill="#111" />
            <rect x="20" y="14" width="2" height="1" fill="#111" />
          </motion.g>

          {/* bed / base */}
          <rect x="8" y="17" width="12" height="2" fill="#111" />
          <rect x="7" y="19" width="14" height="1" fill="#555" />
        </motion.svg>
      </div>
      <p className="bitbox-caption">PED MONITOR · ONLINE</p>
    </div>
  )
}
