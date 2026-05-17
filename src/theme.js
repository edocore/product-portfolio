import { createTheme } from '@mui/material/styles'

// Material 3 dynamic palette — blue-tinted neutrals.
// Light surface stays just shy of pure white so cards/elevation read.
const tokens = {
  light: {
    primary: '#0B57D0',
    primaryHover: '#0842A0',
    onPrimary: '#FFFFFF',
    primaryContainer: '#D3E3FD',
    onPrimaryContainer: '#001D35',
    surface: '#FAFAFD',
    surfaceContainer: '#EEF1F6',
    surfaceContainerHigh: '#E5E8EE',
    surfaceVariant: '#E1E2E8',
    onSurface: '#1A1C1E',
    onSurfaceVariant: '#42474E',
    outline: '#72777F',
    outlineVariant: '#C2C7CF',
  },
  dark: {
    primary: '#A8C7FA',
    primaryHover: '#C2D7FB',
    onPrimary: '#062E6F',
    primaryContainer: '#0842A0',
    onPrimaryContainer: '#D3E3FD',
    surface: '#131314',
    surfaceContainer: '#1E1F20',
    surfaceContainerHigh: '#282A2C',
    surfaceVariant: '#42474E',
    onSurface: '#E3E3E3',
    onSurfaceVariant: '#C2C7CF',
    outline: '#8C9199',
    outlineVariant: '#42474E',
  },
}

// Blue-only gradient with multiple stops for a clearly-visible spectrum:
// sky → cyan-blue → Google Blue → cobalt → deep navy.
// Components import via theme.custom.brandGradient.
const BRAND_GRADIENT =
  'linear-gradient(135deg, #8AB4F8 0%, #4FC3F7 22%, #4285F4 48%, #1A73E8 72%, #0842A0 100%)'

const buildTheme = (mode) => {
  const t = tokens[mode]
  return createTheme({
    palette: {
      mode,
      primary: { main: t.primary, contrastText: t.onPrimary },
      background: { default: t.surface, paper: t.surfaceContainer },
      text: { primary: t.onSurface, secondary: t.onSurfaceVariant },
      divider: t.outlineVariant,
    },
    shape: { borderRadius: 16 },
    custom: {
      brandGradient: BRAND_GRADIENT,
      surfaceContainer: t.surfaceContainer,
      surfaceContainerHigh: t.surfaceContainerHigh,
      surfaceVariant: t.surfaceVariant,
      primaryContainer: t.primaryContainer,
      onPrimaryContainer: t.onPrimaryContainer,
      outline: t.outline,
      outlineVariant: t.outlineVariant,
    },
    typography: {
      fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
      // Material 3 display-large / display-medium / headline-large
      h1: {
        fontFamily: '"Inter", system-ui, sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(44px, 7vw, 84px)',
        lineHeight: 1.05,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontFamily: '"Inter", system-ui, sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(32px, 4.5vw, 52px)',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontFamily: '"Inter", system-ui, sans-serif',
        fontWeight: 600,
        fontSize: 'clamp(22px, 2.6vw, 30px)',
        lineHeight: 1.25,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontFamily: '"Inter", system-ui, sans-serif',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 1.4,
        letterSpacing: '-0.005em',
      },
      body1: { fontSize: 17, lineHeight: 1.55, letterSpacing: '-0.005em' },
      body2: { fontSize: 14, lineHeight: 1.5, color: t.onSurfaceVariant },
      overline: {
        fontSize: 12,
        letterSpacing: '0.08em',
        fontWeight: 500,
        color: t.onSurfaceVariant,
        textTransform: 'uppercase',
        lineHeight: 1.5,
      },
      button: { textTransform: 'none', fontWeight: 500, letterSpacing: '-0.005em' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundColor: t.surface, color: t.onSurface },
        },
      },
      MuiButtonBase: { defaultProps: { disableRipple: false } },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 999,
            padding: '12px 24px',
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: '-0.005em',
          },
          sizeLarge: { padding: '14px 28px', fontSize: 16 },
          containedPrimary: {
            backgroundColor: t.primary,
            color: t.onPrimary,
            '&:hover': { backgroundColor: t.primaryHover },
          },
          outlined: {
            borderColor: t.outline,
            color: t.onSurface,
            '&:hover': {
              borderColor: t.primary,
              color: t.primary,
              backgroundColor: 'transparent',
            },
          },
          text: {
            color: t.onSurface,
            '&:hover': { backgroundColor: t.surfaceContainerHigh },
          },
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            backgroundColor: t.surfaceContainer,
            borderRadius: 24,
            border: 'none',
          },
        },
      },
      MuiAccordion: {
        defaultProps: { disableGutters: true, elevation: 0 },
        styleOverrides: {
          root: {
            backgroundColor: t.surfaceContainer,
            borderRadius: '20px !important',
            marginBottom: 8,
            '&::before': { display: 'none' },
            '&.Mui-expanded': { margin: '0 0 8px 0' },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            padding: '0 24px',
            minHeight: 64,
            '&.Mui-expanded': { minHeight: 64 },
          },
          content: { margin: '20px 0', '&.Mui-expanded': { margin: '20px 0' } },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: { padding: '0 24px 24px' },
        },
      },
      MuiAppBar: { defaultProps: { elevation: 0, color: 'transparent' } },
      MuiPaper: { defaultProps: { elevation: 0 } },
      MuiContainer: { defaultProps: { maxWidth: 'lg' } },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '-0.005em',
            height: 28,
            border: 'none',
            backgroundColor: t.surfaceContainerHigh,
            color: t.onSurface,
            '&:hover': { backgroundColor: t.surfaceVariant },
          },
        },
      },
      MuiDivider: { styleOverrides: { root: { borderColor: t.outlineVariant } } },
      MuiLink: {
        defaultProps: { underline: 'none' },
        styleOverrides: {
          root: {
            color: t.onSurface,
            transition: 'color 120ms ease',
            '&:hover': { color: t.primary },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: t.onSurfaceVariant,
            '&:hover': { backgroundColor: t.surfaceContainerHigh, color: t.onSurface },
          },
        },
      },
    },
  })
}

export const lightTheme = buildTheme('light')
export const darkTheme = buildTheme('dark')
