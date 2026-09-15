import { Box, Button, Card, Chip, Stack, Typography } from '@mui/material'
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

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 3 }} sx={{ mb: 4 }}>
        {ASIO.pillars.map((p, i) => (
          <Reveal key={p.id} delay={i * 100} sx={{ flex: 1, display: 'flex' }}>
          <Card
            sx={{
              p: { xs: 3, md: 3.5 },
              flex: 1,
              bgcolor: 'background.default',
              transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 260ms ease',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 18px 48px rgba(8, 66, 160, 0.18)' },
              '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
            }}
          >
            <Box
              sx={(t) => ({
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: t.custom.brandGradient,
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                fontSize: 15,
                fontWeight: 600,
                mb: 2,
              })}
            >
              {i + 1}
            </Box>
            <Typography variant="h4" component="div" sx={{ mb: 1 }}>
              {p.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              {p.detail}
            </Typography>
          </Card>
          </Reveal>
        ))}
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 3 }} sx={{ mb: 4 }}>
        {ASIO.screens.map((s) => (
          <Box key={s.src} sx={{ flex: 1, width: '100%' }}>
            <ScreenTile screen={s} />
          </Box>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap alignItems="center">
        <Button
          variant="contained"
          href={ASIO.webAppUrl || '#'}
          target={ASIO.webAppUrl && ASIO.webAppUrl !== '#' ? '_blank' : undefined}
          rel="noopener"
          endIcon={<OpenInNewIcon />}
        >
          Visit web app
        </Button>
        {ASIO.tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </Stack>
    </Section>
  )
}
