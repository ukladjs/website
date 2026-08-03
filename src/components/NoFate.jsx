// "NO FATE" — carved Sarah Connor-style: straight knife strokes with overcuts,
// roughened by a turbulence filter, self-carving via stroke-dash animation.
const LETTERS = [
  // N
  { rotate: '-2.5 40 56', strokes: ['M22 16 L19 98', 'M20 18 L62 94', 'M61 12 L63 97'] },
  // O — a knife can't cut curves, so it's a diamond
  { rotate: '2 103 55', strokes: ['M103 10 L131 55', 'M129 51 L104 99', 'M107 97 L75 53', 'M77 57 L101 13'] },
  // F
  { rotate: '-1.5 190 55', strokes: ['M173 13 L170 97', 'M167 20 L213 15', 'M171 55 L206 52'] },
  // A
  { rotate: '1.5 250 55', strokes: ['M226 97 L248 11', 'M250 13 L276 96', 'M233 67 L268 64'] },
  // T
  { rotate: '-2 314 55', strokes: ['M287 19 L342 14', 'M315 10 L312 97'] },
  // E
  { rotate: '2 379 54', strokes: ['M361 13 L357 96', 'M355 19 L401 14', 'M358 54 L392 51', 'M355 93 L403 89'] },
]

function Cuts() {
  let stroke = 0
  return LETTERS.map(({ rotate, strokes }, letter) => (
    <g key={letter} transform={`rotate(${rotate})`}>
      {strokes.map((d) => (
        <path key={d} d={d} pathLength="100" style={{ animationDelay: `${stroke++ * 110}ms` }} />
      ))}
    </g>
  ))
}

export function NoFate() {
  return (
    <svg
      className="nofate"
      viewBox="0 0 470 112"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NO FATE — there is no fate but what we make"
    >
      <filter id="nofate-rough" x="-5%" y="-12%" width="110%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035 0.07" numOctaves="2" seed="7" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="3" />
      </filter>
      <g filter="url(#nofate-rough)">
        <g className="nofate__shadow" transform="translate(2.5 3.5)" aria-hidden="true">
          <Cuts />
        </g>
        <g className="nofate__cut">
          <Cuts />
        </g>
      </g>
    </svg>
  )
}
