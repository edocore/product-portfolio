import { Box, Container, Divider, Link as MuiLink, Stack, Typography } from '@mui/material'
import { PROFILE } from '../data/profile'
import { scrollToId } from '../utils/scroll'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 4, md: 6 } }}>
      <Container>
        <Divider sx={{ mb: { xs: 3, md: 4 } }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} {PROFILE.name}
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('hero')
              }}
              sx={{ fontSize: 14, color: 'text.secondary' }}
            >
              Back to top
            </MuiLink>
            <MuiLink
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener"
              sx={{ fontSize: 14, color: 'text.secondary' }}
            >
              LinkedIn
            </MuiLink>
            <MuiLink
              href={PROFILE.github}
              target="_blank"
              rel="noopener"
              sx={{ fontSize: 14, color: 'text.secondary' }}
            >
              GitHub
            </MuiLink>
            <MuiLink
              href={`mailto:${PROFILE.email}`}
              sx={{ fontSize: 14, color: 'text.secondary' }}
            >
              Email
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
