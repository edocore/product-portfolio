import { Box, Button, Card, Link as MuiLink, Stack, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Section from './Section'
import SectionHeader from './SectionHeader'
import { VIDI } from '../data/vidi'

function Screenshot({ src, alt, sx }) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')
  const stem = src.replace(/^\//, '').replace(/\.png$/, '')
  const png = `${baseUrl}/${stem}.png`
  const webp = `${baseUrl}/${stem}.webp`
  const avif = `${baseUrl}/${stem}.avif`
  return (
    <Box sx={sx}>
      <picture>
        <source srcSet={avif} type="image/avif" />
        <source srcSet={webp} type="image/webp" />
        <img
          src={png}
          alt={alt}
          loading="lazy"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </picture>
    </Box>
  )
}

export default function Startup() {
  const [first, second] = VIDI.screens
  const u = VIDI.universityLaunch

  return (
    <Section id="vidi" sx={{ bgcolor: (t) => t.custom.surfaceContainer }}>
      <SectionHeader eyebrow="Side project" title={VIDI.tagline} kicker={VIDI.description} />
      <Typography variant="body2" sx={{ mb: { xs: 4, md: 6 } }}>
        {VIDI.launch}
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
        <Box
          sx={{
            flex: { md: '0 0 38%' },
            position: 'relative',
            width: '100%',
            maxWidth: { xs: 360, md: 360 },
            mx: { xs: 'auto', md: 0 },
            aspectRatio: '5 / 7',
          }}
        >
          <Screenshot
            src={first.src}
            alt={first.alt}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '72%',
              zIndex: 2,
              filter: 'drop-shadow(0 18px 36px rgba(8, 66, 160, 0.20))',
            }}
          />
          <Screenshot
            src={second.src}
            alt={second.alt}
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '72%',
              zIndex: 1,
              filter: 'drop-shadow(0 18px 36px rgba(8, 66, 160, 0.16))',
            }}
          />
        </Box>

        <Box sx={{ flex: 1, width: '100%' }}>
          <Stack spacing={2}>
            {VIDI.callouts.map((c, i) => (
              <Card key={c.id} sx={{ p: { xs: 3, md: 4 }, bgcolor: 'background.default' }}>
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box
                    sx={(t) => ({
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: t.custom.brandGradient,
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      fontSize: 15,
                      fontWeight: 600,
                    })}
                  >
                    {i + 1}
                  </Box>
                  <Box>
                    <Typography variant="h4" component="div" sx={{ mb: 0.75 }}>
                      {c.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {c.detail}
                      {c.linkUrl && (
                        <MuiLink
                          href={c.linkUrl}
                          target="_blank"
                          rel="noopener"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 500,
                            '&:hover': { textDecoration: 'underline' },
                          }}
                        >
                          {c.linkLabel}
                        </MuiLink>
                      )}
                      {c.linkUrl && '.'}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Stack>

          <Stack spacing={2.5} sx={{ mt: 4 }} alignItems="flex-start">
            <Button
              variant="contained"
              href={VIDI.landingUrl || '#'}
              target={VIDI.landingUrl ? '_blank' : undefined}
              rel="noopener"
              endIcon={<OpenInNewIcon />}
              disabled={!VIDI.landingUrl}
            >
              Visit landing page
            </Button>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap alignItems="center">
              <Box
                component="a"
                href={VIDI.appStoreUrl}
                target="_blank"
                rel="noopener"
                aria-label="Download on the App Store"
                sx={{ display: 'inline-block', height: 48 }}
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  style={{ height: 48, display: 'block' }}
                />
              </Box>
              <Box
                component="a"
                href={VIDI.playStoreUrl}
                target="_blank"
                rel="noopener"
                aria-label="Get it on Google Play"
                sx={{ display: 'inline-block', height: 48 }}
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  style={{ height: 70, display: 'block', margin: '-11px 0' }}
                />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {u && (
        <Card
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 3, md: 5 },
            bgcolor: 'background.default',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 6 }}>
            <Box sx={{ flex: { md: '0 0 38%' } }}>
              <Typography variant="h3" component="h3" sx={{ mb: 1.5 }}>
                {u.headline}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.primary' }}>
                {u.body}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Stack spacing={1.25}>
                {u.partners.map((p) => (
                  <Stack key={p} direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={(t) => ({
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: t.custom.brandGradient,
                        flexShrink: 0,
                      })}
                    />
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>{p}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Card>
      )}
    </Section>
  )
}
