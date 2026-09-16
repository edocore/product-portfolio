import { Box, Button, Card, Stack, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Lightbox from './Lightbox'
import { ASIO } from '../data/asio'

function ScreenTile({ screen }) {
  if (ASIO.screensReady) {
    return (
      <Lightbox
        src={screen.src}
        alt={screen.alt}
        thumbSx={(t) => ({
          display: 'block',
          width: '100%',
          borderRadius: '16px',
          border: `1px solid ${t.custom.outlineVariant}`,
          bgcolor: 'background.default',
        })}
      />
    )
  }
  return (
    <Box
      sx={(t) => ({
        aspectRatio: '16 / 10',
        borderRadius: '16px',
        border: `1px dashed ${t.custom.outline}`,
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        color: 'text.secondary',
        textAlign: 'center',
        px: 2,
      })}
    >
      <ImageOutlinedIcon fontSize="small" />
      <Typography variant="body2">{screen.alt}</Typography>
    </Box>
  )
}

export default function Asio() {
  return (
    <Section id="asio" sx={{ bgcolor: (t) => t.custom.surfaceContainer }}>
      <SectionHeader
        eyebrow="Side project · in development"
        tag="asio"
        title={ASIO.tagline}
        kicker={ASIO.description}
      />

      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: { xs: 4, md: 5 } }}>
        <Typography
          component="span"
          sx={(t) => ({
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            backgroundImage: t.custom.brandGradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          })}
        >
          {ASIO.name}
        </Typography>
        <Typography variant="body2">
          {ASIO.expansion} · {ASIO.status}
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="flex-start"
      >
        <Box sx={{ flex: 1, width: '100%' }}>
          <Stack spacing={2}>
            {ASIO.pillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
              <Card
                sx={{
                  p: { xs: 3, md: 3.5 },
                  bgcolor: 'background.default',
                  transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 260ms ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 18px 48px rgba(8, 66, 160, 0.18)' },
                  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
                }}
              >
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box
                    sx={(t) => ({
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: t.custom.brandGradient,
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      fontSize: 15,
                      fontWeight: 600,
                    })}
                  >
                    {i + 1}
                  </Box>
                  <Box>
                    <Typography variant="h4" component="div" sx={{ mb: 0.75 }}>
                      {p.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {p.detail}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
              </Reveal>
            ))}
          </Stack>

          <Stack spacing={2.5} sx={{ mt: 4 }} alignItems="flex-start">
            <Button
              variant="contained"
              href={ASIO.webAppUrl || '#'}
              target={ASIO.webAppUrl && ASIO.webAppUrl !== '#' ? '_blank' : undefined}
              rel="noopener"
              endIcon={<OpenInNewIcon />}
            >
              Visit web app
            </Button>
          </Stack>
        </Box>

        <Box sx={{ flex: { md: '0 0 42%' }, width: '100%' }}>
          <ScreenTile screen={ASIO.screens[0]} />
        </Box>
      </Stack>
    </Section>
  )
}
