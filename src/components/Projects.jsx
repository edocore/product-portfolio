import { Box, Card, Chip, Stack, Typography } from '@mui/material'
import Section from './Section'
import SectionHeader from './SectionHeader'
import { CASE_STUDIES } from '../data/caseStudies'

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Selected work"
        title="Four products. Four problems worth solving."
        kicker="Each one started as a prototype. Each one shipped to real users. The metrics below are the outcomes — the stories behind them are the part I care about."
      />

      <Stack spacing={{ xs: 3, md: 4 }}>
        {CASE_STUDIES.map((cs) => (
          <Card key={cs.id} sx={{ p: { xs: 3, md: 3.5 } }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 6 }}>
              <Box sx={{ flex: { md: '0 0 32%' } }}>
                <Typography
                  variant="h2"
                  component="div"
                  sx={(t) => ({
                    fontSize: { xs: 'clamp(56px, 18vw, 80px)', md: 'clamp(56px, 5.5vw, 84px)' },
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    backgroundImage: t.custom.brandGradient,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    mb: 1.5,
                  })}
                >
                  {cs.impact}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, mb: 0.5 }}>
                  {cs.impactLabel}
                </Typography>
                <Typography variant="body2">{cs.impactDetail}</Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="overline" component="div" sx={{ mb: 1.5 }}>
                  {cs.company} · {cs.role}
                </Typography>
                <Typography variant="h3" component="h3" sx={{ mb: 3 }}>
                  {cs.title}
                </Typography>

                <Stack
                  direction={{ xs: 'column', lg: 'row' }}
                  spacing={{ xs: 2.5, lg: 4 }}
                  sx={{ mb: 3 }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="overline" component="div" sx={{ mb: 1 }}>
                      Problem
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {cs.problem}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="overline" component="div" sx={{ mb: 1 }}>
                      Solution
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {cs.solution}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {cs.tags.slice(0, 4).map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Section>
  )
}
