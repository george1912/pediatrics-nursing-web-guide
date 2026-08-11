import { emphasisItems } from '../data/emphasis'
import type { EmphasisItem } from '../data/types'

type EmphasisPanelProps = {
  activeIds: Set<string>
  onToggle: (item: EmphasisItem) => void
  onClear: () => void
}

export function EmphasisPanel({ activeIds, onToggle, onClear }: EmphasisPanelProps) {
  const anyOn = activeIds.size > 0

  return (
    <section className="emphasis-panel" aria-label="Professor high-yield emphasis">
      <div className="emphasis-panel-head">
        <div>
          <h2>Emphasis switches</h2>
          <p className="lede">
            Professor-confirmed high-yield from the study guide. Flip a switch to
            highlight the matching subjects in the outline above.
          </p>
        </div>
        {anyOn && (
          <button type="button" className="pixel-btn" onClick={onClear}>
            Clear highlights
          </button>
        )}
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
    </section>
  )
}
