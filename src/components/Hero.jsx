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

export default function Hero() {
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
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 5, md: 8 }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Box sx={{ flex: { md: '0 0 60%' }, width: '100%' }}>
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
                  {PROFILE.role}
                </Typography>
              </Box>

              <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                {PROFILE.povHeadline}{' '}
                <Box
                  component="span"
                  sx={(t) => ({
                    backgroundImage: t.custom.brandGradient,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    fontWeight: 600,
                  })}
                >
                  {PROFILE.povHeadlineEm}
                </Box>
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 4, md: 5 }, maxWidth: 600, fontSize: { xs: 17, md: 19 } }}
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
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToId('contact')}
                >
                  Get in touch
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                flex: { md: '0 0 35%' },
                width: '100%',
                p: { xs: 3, md: 3.5 },
                borderRadius: '24px',
                bgcolor: (t) => t.custom.surfaceContainer,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography
                component="div"
                sx={(t) => ({
                  fontSize: { xs: 'clamp(36px, 8.5vw, 52px)', md: 'clamp(40px, 3.6vw, 56px)' },
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                  backgroundImage: t.custom.brandGradient,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                })}
              >
                {PROFILE.anchorMetric}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.primary' }}>
                {PROFILE.anchorMetricLabel}
              </Typography>
            </Box>
          </Stack>
        </Fade>
      </Container>
    </Box>
  )
}
