import { Box, Card, Divider, Stack, Typography } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { ENDORSEMENTS } from '../data/endorsements'

export default function References() {
  return (
    <Section
      id="words"
      sx={{
        bgcolor: (t) => t.custom.surfaceContainer,
      }}
    >
      <SectionHeader
        eyebrow="Words"
        tag="testimonials"
        title="What people say."
        kicker="From managers, peers, and collaborators across Amazon and beyond."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {ENDORSEMENTS.map((e, i) => (
          <Reveal key={e.name} delay={i * 90} sx={{ display: 'flex' }}>
          <Card
            sx={{
              p: { xs: 3, md: 3.5 },
              width: '100%',
              bgcolor: 'background.default',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 260ms ease',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 18px 48px rgba(8, 66, 160, 0.18)' },
              '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
            }}
          >
            <FormatQuoteIcon
              sx={(t) => ({
                fontSize: 28,
                color: 'transparent',
                backgroundImage: t.custom.brandGradient,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                mb: 0.5,
              })}
            />
            <Typography
              component="blockquote"
              sx={{
                fontSize: 17,
                lineHeight: 1.5,
                fontWeight: 400,
                color: 'text.primary',
                m: 0,
                mb: 2.5,
              }}
            >
              {e.quote}
            </Typography>
            <Divider sx={{ width: 48, mb: 1.5, borderBottomWidth: 2 }} />
            <Stack alignItems="center">
              <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{e.name}</Typography>
              <Typography variant="body2">{e.role}</Typography>
            </Stack>
          </Card>
          </Reveal>
        ))}
      </Box>
    </Section>
  )
}
