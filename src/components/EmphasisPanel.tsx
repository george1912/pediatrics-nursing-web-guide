import { emphasisItems } from '../data/emphasis'
import type { EmphasisItem } from '../data/types'

type EmphasisPanelProps = {
  activeIds: Set<string>
  expanded: boolean
  onToggle: (item: EmphasisItem) => void
  onClear: () => void
  onToggleExpanded: () => void
  onGoToGuide: () => void
}

export function EmphasisPanel({
  activeIds,
  expanded,
  onToggle,
  onClear,
  onToggleExpanded,
  onGoToGuide,
}: EmphasisPanelProps) {
  const anyOn = activeIds.size > 0

  return (
    <section className="emphasis-panel" aria-label="Exam emphasis settings">
      <button
        type="button"
        className="emphasis-disclosure"
        aria-expanded={expanded}
        onClick={onToggleExpanded}
      >
        <span>
          <strong>Emphasis settings</strong>
          <small>
            {anyOn
              ? `${activeIds.size} saved and active on this device`
              : 'Choose high-yield exam highlights'}
          </small>
        </span>
        <span aria-hidden="true">{expanded ? '▼' : '▶'}</span>
      </button>

      {expanded ? (
        <>
          <div className="emphasis-panel-head">
            <div>
              <h2>Emphasis switches</h2>
              <p className="lede">
                High-yield exam areas from the study guide. Selections stay saved
                on this device and highlight matching topics above.
              </p>
            </div>
            <div className="emphasis-actions">
              <button type="button" className="pixel-btn" onClick={onGoToGuide}>
                ↑ Back to study topics
              </button>
              {anyOn ? (
                <button type="button" className="pixel-btn" onClick={onClear}>
                  Clear highlights
                </button>
              ) : null}
            </div>
          </div>

          <ul className="emphasis-list">
            {emphasisItems.map((item) => {
              const on = activeIds.has(item.id)
              return (
                <li key={item.id} className={`emphasis-item${on ? ' is-on' : ''}`}>
                  <button
                    type="button"
                    className={`emphasis-switch${on ? ' is-on' : ''}`}
                    role="switch"
                    aria-checked={on}
                    aria-label={`${item.label}${on ? ', on' : ', off'}`}
                    onClick={() => onToggle(item)}
                  >
                    <span className="emphasis-switch-track" aria-hidden="true">
                      <span className="emphasis-switch-knob" />
                    </span>
                    <span className="emphasis-switch-copy">
                      <span className="emphasis-switch-label">{item.label}</span>
                      <span className="emphasis-switch-detail">{item.detail}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      ) : null}
    </section>
  )
}
