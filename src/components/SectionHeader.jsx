import { Reveal } from './Reveal.jsx'

export function SectionHeader({ eyebrow, title, subtitle, align = 'start' }) {
  return (
    <Reveal className={`section-header ${align === 'center' ? 'section-header--center' : ''}`.trim()}>
      {eyebrow ? (
        <span className="eyebrow">
          <span className="eyebrow__tick" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-header__title">{title}</h2>
      {subtitle ? <p className="section-header__subtitle">{subtitle}</p> : null}
    </Reveal>
  )
}
