import { Box, Stack, Typography } from '@mui/material'

const MONO = '"SF Mono", "JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace'

export default function SectionHeader({ eyebrow, title, kicker, tag, sx }) {
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
      {title &&
        (tag ? (
          <Box>
            <Typography
              component="div"
              sx={{ fontFamily: MONO, fontSize: { xs: 13, md: 14 }, color: 'text.secondary', mb: 0.75 }}
            >
              <Box component="span" sx={{ color: 'primary.main' }}>&lt;{tag}&gt;</Box>
            </Typography>
            <Typography variant="h2" component="h2" sx={{ pl: { xs: 2, md: 3 } }}>
              {title}
            </Typography>
            <Typography
              component="div"
              sx={{ fontFamily: MONO, fontSize: { xs: 13, md: 14 }, color: 'text.secondary', mt: 0.75 }}
            >
              <Box component="span" sx={{ color: 'primary.main' }}>&lt;/{tag}&gt;</Box>
            </Typography>
          </Box>
        ) : (
          <Typography variant="h2" component="h2">
            {title}
          </Typography>
        ))}
      {kicker && (
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 17, md: 18 } }}>
          {kicker}
        </Typography>
      )}
    </Stack>
  )
}
