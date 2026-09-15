import { Box, Container, Fade } from '@mui/material'
import { useInView } from '../hooks/useInView'

export default function Section({ id, children, sx, containerSx }) {
  const [ref, seen] = useInView()
  return (
    <Box
      ref={ref}
      component="section"
      id={id}
      sx={{ py: { xs: 8, md: 14 }, scrollMarginTop: 80, ...sx }}
    >
      <Container sx={containerSx}>
        <Fade in={seen} timeout={700}>
          <Box
            sx={{
              transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
              transform: seen ? 'translateY(0)' : 'translateY(28px)',
              '@media (prefers-reduced-motion: reduce)': { transform: 'none', transition: 'none' },
            }}
          >
            {children}
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}
