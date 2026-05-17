import { Box, Button, Stack, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/MailOutline'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Section from './Section'
import { PROFILE } from '../data/profile'

export default function Contact() {
  return (
    <Section id="contact">
      <Box
        sx={(t) => ({
          p: { xs: 3, md: 3.5 },
          borderRadius: '24px',
          background: t.custom.brandGradient,
          color: '#fff',
          textAlign: { xs: 'left', md: 'center' },
          maxWidth: 760,
          mx: 'auto',
        })}
      >
        <Typography
          variant="overline"
          component="div"
          sx={{ color: 'rgba(255,255,255,0.85)', mb: 2, letterSpacing: '0.08em' }}
        >
          Contact
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: '#fff', mb: 1.5, fontSize: { xs: 28, md: 36 } }}
        >
          Let's talk.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: 16, md: 17 },
            mb: 3.5,
            maxWidth: 520,
            mx: { md: 'auto' },
          }}
        >
          Based remotely. {PROFILE.status}. The fastest way to reach me is email.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent={{ xs: 'flex-start', md: 'center' }}
        >
          <Button
            variant="contained"
            size="large"
            href={`mailto:${PROFILE.email}`}
            startIcon={<EmailIcon />}
            sx={{
              bgcolor: '#fff',
              color: '#0842A0',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.92)' },
            }}
          >
            Email
          </Button>
          <Button
            variant="outlined"
            size="large"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener"
            startIcon={<LinkedInIcon />}
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              color: '#fff',
              '&:hover': {
                borderColor: '#fff',
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            size="large"
            href={PROFILE.github}
            target="_blank"
            rel="noopener"
            startIcon={<GitHubIcon />}
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              color: '#fff',
              '&:hover': {
                borderColor: '#fff',
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Section>
  )
}
