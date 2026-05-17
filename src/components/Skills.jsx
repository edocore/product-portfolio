import { Box, Card, Chip, Stack, Typography } from '@mui/material'
import Section from './Section'
import SectionHeader from './SectionHeader'
import { FRAMEWORKS } from '../data/frameworks'

export default function Skills() {
  return (
    <Section id="craft">
      <SectionHeader
        eyebrow="Craft"
        title="How I work."
        kicker="The frameworks, tools, and habits I lean on across discovery, prioritization, and shipping."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 2.5,
        }}
      >
        {FRAMEWORKS.map((f) => (
          <Card key={f.name} sx={{ p: { xs: 3, md: 3.5 } }}>
            <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
              {f.name}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {f.items.map((item) => (
                <Chip key={item} label={item} size="small" />
              ))}
            </Stack>
          </Card>
        ))}
      </Box>
    </Section>
  )
}
