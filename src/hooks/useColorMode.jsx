import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ColorModeCtx = createContext({ mode: 'light', toggle: () => {} })
const STORAGE_KEY = 'edocore-theme'

function getInitialMode() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode)
    document.documentElement.dataset.theme = mode
  }, [mode])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored !== 'light' && stored !== 'dark') {
        setMode(e.matches ? 'dark' : 'light')
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const value = useMemo(
    () => ({ mode, toggle: () => setMode((m) => (m === 'light' ? 'dark' : 'light')) }),
    [mode],
  )

  return <ColorModeCtx.Provider value={value}>{children}</ColorModeCtx.Provider>
}

export function useColorMode() {
  return useContext(ColorModeCtx)
}
