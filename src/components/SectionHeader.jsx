import { useMemo } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useInView } from '../hooks/useInView'
import { useTypewriter } from '../hooks/useTypewriter'

// Section titles type in when scrolled into view, then loop: pause, delete,
// retype — like the hero role pill. A hidden full-text layer reserves the final
// height so there's no layout shift. Honors prefers-reduced-motion.
export default function SectionHeader({ eyebrow, title, kicker, sx }) {
  const [ref, seen] = useInView()
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

  const words = useMemo(() => (title ? [title] : []), [title])
  const typed = useTypewriter(words, { speed: 45, pause: 1800, enabled: seen && !reduce })
  const shown = reduce ? title : typed

  return (
    <Stack spacing={2} sx={{ mb: { xs: 5, md: 7 }, maxWidth: 760, ...sx }}>
      {eyebrow && (
        <Box
          sx={{
            px: 3.5,
            py: 1.5,
            borderRadius: 999,
            width: 'fit-content',
            bgcolor: (t) => t.custom.surfaceContainer,
          }}
        >
          <Typography variant="overline" component="span">
            {eyebrow}
          </Typography>
        </Box>
      )}
      {title && (
        <Box sx={{ position: 'relative' }}>
          <Typography aria-hidden variant="h2" component="div" sx={{ visibility: 'hidden' }}>
            {title}
          </Typography>
          <Typography
            ref={ref}
            variant="h2"
            component="h2"
            sx={{ position: 'absolute', inset: 0 }}
          >
            {shown}
            {seen && !reduce && (
              <Box
                component="span"
                aria-hidden
                sx={{
                  color: 'primary.main',
                  fontWeight: 400,
                  animation: 'shBlink 1s step-end infinite',
                  '@keyframes shBlink': { '50%': { opacity: 0 } },
                }}
              >
                ▋
              </Box>
            )}
          </Typography>
        </Box>
      )}
      {kicker && (
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 17, md: 18 } }}>
          {kicker}
        </Typography>
      )}
    </Stack>
  )
}
