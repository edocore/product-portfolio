import { useState, useEffect } from 'react'

// Cycles through `words`, typing and deleting each – a lightweight, dependency-free
// typewriter for the hero role line.
export function useTypewriter(words, { speed = 70, pause = 1600, enabled = true } = {}) {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    if (!enabled || !words.length) return
    const word = words[i % words.length]

    if (!del && txt === word) {
      const t = setTimeout(() => setDel(true), pause)
      return () => clearTimeout(t)
    }
    if (del && txt === '') {
      setDel(false)
      setI((n) => n + 1)
      return
    }
    const t = setTimeout(
      () => setTxt(word.slice(0, txt.length + (del ? -1 : 1))),
      del ? speed / 2 : speed,
    )
    return () => clearTimeout(t)
  }, [txt, del, i, words, speed, pause, enabled])

  return txt
}
