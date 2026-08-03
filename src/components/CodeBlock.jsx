import { Highlight } from 'prism-react-renderer'

// Syntax colours drawn from the brand ramp: blues carry the structure, a soft
// teal marks strings and a warm sand marks literals, so the code window reads
// as part of the page rather than a pasted-in editor screenshot.
const ukladNight = {
  plain: { color: '#c6d2e6', backgroundColor: 'transparent' },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#5c6a85', fontStyle: 'italic' } },
    { types: ['punctuation'], style: { color: '#7c8aa3' } },
    { types: ['keyword', 'atrule', 'rule', 'selector', 'important'], style: { color: '#7fb0f5' } },
    { types: ['operator', 'entity', 'url'], style: { color: '#93a5c3' } },
    { types: ['string', 'char', 'attr-value', 'inserted', 'regex'], style: { color: '#8ed0c2' } },
    { types: ['number', 'boolean', 'constant', 'symbol'], style: { color: '#e3b98f' } },
    { types: ['property', 'tag', 'attr-name', 'deleted'], style: { color: '#9cc4f2' } },
    { types: ['function', 'class-name', 'maybe-class-name'], style: { color: '#dce9fe' } },
    { types: ['variable', 'parameter'], style: { color: '#c6d2e6' } },
    { types: ['namespace'], style: { opacity: 0.7 } },
  ],
}

export function CodeBlock({ code, language = 'typescript', fontSize = '0.84rem' }) {
  return (
    <Highlight theme={ukladNight} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{ ...style, padding: 0, margin: 0, fontSize }}
          className={className}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

// Terminal-style window chrome around a code block.
export function CodeWindow({ title, children }) {
  return (
    <div className="code-window">
      <div className="code-window__bar">
        <span className="code-window__dot code-window__dot--r" />
        <span className="code-window__dot code-window__dot--y" />
        <span className="code-window__dot code-window__dot--g" />
        {title ? <span className="code-window__title">{title}</span> : null}
      </div>
      <div className="code-window__body">{children}</div>
    </div>
  )
}
