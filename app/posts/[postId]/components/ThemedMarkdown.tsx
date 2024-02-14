"use client"

import { useRef, useEffect } from "react"

import Markdown from "markdown-to-jsx"
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'

import "highlight.js/styles/atom-one-dark-reasonable.css"

hljs.registerLanguage('typescript', typescript)

type Props = {
  children: string
}

export default function ThemedMarkdown({ children } : Props) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(rootRef.current === null) return
    rootRef.current.querySelectorAll("pre code").forEach(elem => {
      hljs.highlightElement(elem as HTMLElement)
    })
  }, [children])

  return (
    <div ref={rootRef}>
      <Markdown>
        {children}
      </Markdown>
    </div>
  )
}
