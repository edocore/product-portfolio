import { Box, Container, Fade } from '@mui/material'

export default function Section({ id, children, sx, containerSx }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 8, md: 14 }, scrollMarginTop: 80, ...sx }}
    >
      <Container sx={containerSx}>
        <Fade in timeout={500}>
          <Box>{children}</Box>
        </Fade>
      </Container>
    </Box>
  )
}
