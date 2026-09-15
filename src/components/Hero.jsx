import {
  Box,
  Button,
  Container,
  Fade,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { PROFILE } from '../data/profile'
import { scrollToId } from '../utils/scroll'
import { useTypewriter } from '../hooks/useTypewriter'

const MONO = '"SF Mono", "JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace'

// Renders a JS-object literal as a syntax-highlighted "artifact metadata" card,
// echoing the JSON envelope this portfolio is stored under as a shared artifact.
function JsonValue({ value }) {
  if (typeof value === 'number') {
    return <Box component="span" sx={{ color: 'primary.main' }}>{value}</Box>
  }
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((v, i) => (
          <Box component="span" key={v}>
            <Box component="span" sx={{ color: 'success.main' }}>"{v}"</Box>
            {i < value.length - 1 ? ', ' : ''}
          </Box>
        ))}
        ]
      </>
    )
  }
  return <Box component="span" sx={{ color: 'success.main' }}>"{value}"</Box>
}

function ArtifactCard({ artifact }) {
  const entries = Object.entries(artifact)
  return (
    <Box
      sx={(t) => ({
        borderRadius: '20px',
        overflow: 'hidden',
        border: `1px solid ${t.custom.outlineVariant}`,
        bgcolor: (th) => (th.palette.mode === 'light' ? '#0E1116' : '#0A0B0D'),
        boxShadow: '0 24px 60px rgba(8, 66, 160, 0.14)',
        transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 32px 80px rgba(8, 66, 160, 0.28)',
        },
        '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
      })}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ px: 2, py: 1.5, borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Stack direction="row" spacing={0.75}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: c }} />
          ))}
        </Stack>
        <Typography sx={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
          GET&nbsp;/artifact/portfolio.json
        </Typography>
      </Stack>
      <Box
        component="pre"
        sx={{
          m: 0,
          px: { xs: 2.5, md: 3 },
          py: { xs: 2.5, md: 3 },
          fontFamily: MONO,
          fontSize: { xs: 13, md: 15 },
          lineHeight: 1.85,
          color: 'rgba(255,255,255,0.82)',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        <Box component="span" sx={{ color: 'rgba(255,255,255,0.4)' }}>{'{'}</Box>
        {entries.map(([k, v], i) => (
          <Box component="div" key={k} sx={{ pl: 2 }}>
            <Box component="span" sx={{ color: '#8AB4F8' }}>"{k}"</Box>
            <Box component="span" sx={{ color: 'rgba(255,255,255,0.5)' }}>: </Box>
            <JsonValue value={v} />
            {i < entries.length - 1 ? ',' : ''}
          </Box>
        ))}
        <Box component="span" sx={{ color: 'rgba(255,255,255,0.4)' }}>{'}'}</Box>
      </Box>
    </Box>
  )
}

export default function Hero() {
  const roles = PROFILE.role.split('·').map((s) => s.trim())
  const typedRole = useTypewriter(roles)
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: { xs: 'calc(100vh - 64px)', md: 'calc(100vh - 64px)' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        <Fade in timeout={500}>
          <Box sx={{ maxWidth: { xs: '100%', md: 760 }, width: '100%' }}>
            <Box
              sx={{
                mb: { xs: 3, md: 4 },
                px: 3.5,
                py: 1.5,
                borderRadius: 999,
                width: 'fit-content',
                maxWidth: '100%',
                bgcolor: (t) => t.custom.surfaceContainer,
              }}
            >
              <Typography variant="overline" component="span" sx={{ letterSpacing: '0.04em' }}>
                {typedRole}
                <Box
                  component="span"
                  aria-hidden
                  sx={{
                    ml: '2px',
                    color: 'primary.main',
                    animation: 'heroBlink 1s step-end infinite',
                    '@keyframes heroBlink': { '50%': { opacity: 0 } },
                    '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
                  }}
                >
                  ▋
                </Box>
              </Typography>
            </Box>

            <ArtifactCard artifact={PROFILE.heroArtifact} />

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: { xs: 4, md: 5 }, mb: { xs: 4, md: 5 }, fontSize: { xs: 17, md: 19 } }}
            >
              {PROFILE.povSubhead}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollToId('work')}
              >
                See the work
              </Button>
              <Button variant="outlined" size="large" onClick={() => scrollToId('contact')}>
                Get in touch
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}
