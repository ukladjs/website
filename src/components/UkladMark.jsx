import { useId } from 'react'

// The uklad grid mark rebuilt as an inline SVG so it works on dark backgrounds.
// The PNG's accent squares are dark ink on white; here they are inverted to a
// light neutral so the same figure/ground relationship survives on black.
const ACCENT = '#DCEAFE'

// Row-major cell fills: `null` takes the brand gradient, ACCENT the light ink.
// The accents sit top-middle and centre, as in the avatar.
const CELLS = [
  [null, ACCENT, null],
  [null, ACCENT, null],
  [null, null, null],
]

export function UkladMark({ size = 22, wordmark = true }) {
  const gradientId = `uklad-mark-${useId()}`

  return (
    <span className="brandmark">
      <svg
        width={size}
        height={size}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* One diagonal sweep across the whole grid, so the nine cells read
              as a single object lit from the top-left. */}
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4B8DE8" />
            <stop offset="52%" stopColor="#1E58AA" />
            <stop offset="100%" stopColor="#10346C" />
          </linearGradient>
        </defs>
        {CELLS.flatMap((row, r) =>
          row.map((fill, c) => (
            <rect
              key={`${r}-${c}`}
              x={1 + c * 11}
              y={1 + r * 11}
              width="9"
              height="9"
              rx="2.4"
              fill={fill ?? `url(#${gradientId})`}
            />
          )),
        )}
      </svg>
      {wordmark ? <span className="brandmark__word">uklad</span> : null}
    </span>
  )
}
