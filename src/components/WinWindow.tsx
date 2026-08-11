import type { ReactNode } from 'react'

type WinWindowProps = {
  title: string
  children: ReactNode
  className?: string
}

export function WinWindow({ title, children, className = '' }: WinWindowProps) {
  return (
    <section className={`win ${className}`.trim()} aria-label={title}>
      <header className="win-titlebar">
        <h2>{title}</h2>
      </header>
      <div className="win-body">{children}</div>
    </section>
  )
}
