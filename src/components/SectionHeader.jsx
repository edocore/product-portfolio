import { Box, Stack, Typography } from '@mui/material'

export default function SectionHeader({ eyebrow, title, kicker, sx }) {
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
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
      )}
      {kicker && (
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 17, md: 18 } }}>
          {kicker}
        </Typography>
      )}
    </Stack>
  )
}
