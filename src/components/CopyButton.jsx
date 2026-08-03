import { useEffect, useRef, useState } from 'react'
import { CheckIcon, CopyIcon } from './icons.jsx'

export function CopyButton({ text, label = 'Copy to clipboard' }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard unavailable (http, permissions) — nothing useful to do.
    }
  }

  return (
    <button type="button" className={`copy-btn ${copied ? 'copy-btn--done' : ''}`} onClick={copy} aria-label={label}>
      {copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
    </button>
  )
}
