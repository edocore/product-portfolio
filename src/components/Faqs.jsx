import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Section from './Section'
import SectionHeader from './SectionHeader'
import { FAQS } from '../data/faqs'

export default function Faqs() {
  return (
    <Section id="questions">
      <SectionHeader
        eyebrow="Questions"
        title="Things people ask."
        kicker="Short answers to what tends to come up in interviews and intro conversations."
      />

      <Box>
        {FAQS.map((f) => (
          <Accordion key={f.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 500, fontSize: { xs: 16, md: 17 } }}>
                {f.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                {f.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Section>
  )
}
