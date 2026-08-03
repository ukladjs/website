import { Highlight, themes } from 'prism-react-renderer'

export function CodeBlock({ code, language = 'typescript', fontSize = '0.84rem' }) {
  return (
    <Highlight theme={themes.oneDark} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{ ...style, background: 'transparent', padding: 0, margin: 0, fontSize }}
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
