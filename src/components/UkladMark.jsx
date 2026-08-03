// The uklad grid mark rebuilt as an inline SVG so it works on dark backgrounds.
// The PNG's accent squares are dark ink on white; here they are inverted to a
// light neutral so the same figure/ground relationship survives on black.
const BLUE = '#1E4FA9'
const ACCENT = '#E8EAF0'

// Row-major cell fills: the accents sit top-middle and centre, as in the avatar.
const CELLS = [
  [BLUE, ACCENT, BLUE],
  [BLUE, ACCENT, BLUE],
  [BLUE, BLUE, BLUE],
]

export function UkladMark({ size = 22, wordmark = true }) {
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
        {CELLS.flatMap((row, r) =>
          row.map((fill, c) => (
            <rect
              key={`${r}-${c}`}
              x={1 + c * 11}
              y={1 + r * 11}
              width="9"
              height="9"
              rx="2.4"
              fill={fill}
            />
          )),
        )}
      </svg>
      {wordmark ? <span className="brandmark__word">uklad</span> : null}
    </span>
  )
}
