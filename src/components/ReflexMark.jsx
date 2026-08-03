// The three logo chevrons rebuilt as an inline SVG so the mark works on dark
// backgrounds (the PNG has dark ink). Colors match the original logo.
export function ReflexMark({ size = 22, wordmark = true }) {
  return (
    <span className="brandmark">
      <svg
        width={size * 1.9}
        height={size}
        viewBox="0 0 64 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M2 2h9.5L24 17 11.5 32H2l12.5-15L2 2Z" fill="#F0603F" stroke="#F0603F" strokeWidth="3" strokeLinejoin="round" />
        <path d="M21 2h9.5L43 17 30.5 32H21l12.5-15L21 2Z" fill="#3BB54A" stroke="#3BB54A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M40 2h9.5L62 17 49.5 32H40l12.5-15L40 2Z" fill="#4AA8E0" stroke="#4AA8E0" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      {wordmark ? <span className="brandmark__word">reflex</span> : null}
    </span>
  )
}
