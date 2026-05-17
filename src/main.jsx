import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ColorModeProvider, useColorMode } from './hooks/useColorMode.jsx'
import { lightTheme, darkTheme } from './theme'
import App from './App.jsx'

function ThemedApp() {
  const { mode } = useColorMode()
  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeProvider>
      <ThemedApp />
    </ColorModeProvider>
  </StrictMode>,
)
