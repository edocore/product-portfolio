import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { PROFILE } from '../data/profile'
import { useColorMode } from '../hooks/useColorMode.jsx'
import { scrollToId } from '../utils/scroll'

function BrandMark({ size = 28 }) {
  return (
    <Box
      sx={(t) => ({
        width: size,
        height: size,
        borderRadius: '50%',
        background: t.custom.brandGradient,
        display: 'grid',
        placeItems: 'center',
      })}
    >
      <AutoAwesomeIcon sx={{ fontSize: size * 0.55, color: '#fff' }} />
    </Box>
  )
}

export default function Navbar() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const { mode, toggle } = useColorMode()
  const [open, setOpen] = useState(false)

  const handleClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(id)
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backdropFilter: 'saturate(180%) blur(12px)',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? 'rgba(250, 250, 253, 0.78)'
              : 'rgba(19, 19, 20, 0.78)',
          borderBottom: 'none',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: 64, gap: 2 }}>
            <MuiLink
              href="#hero"
              onClick={(e) => handleClick(e, 'hero')}
              sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}
            >
              <BrandMark size={28} />
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'text.primary',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {PROFILE.name}
              </Typography>
            </MuiLink>

            <Box sx={{ flex: 1 }} />

            {isDesktop ? (
              <Stack direction="row" spacing={0.5} alignItems="center">
                {PROFILE.sections.map((s) => (
                  <MuiLink
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => handleClick(e, s.id)}
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      px: 1.5,
                      py: 1,
                      borderRadius: 999,
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'text.primary',
                        bgcolor: (t) => t.custom.surfaceContainerHigh,
                      },
                    }}
                  >
                    {s.label}
                  </MuiLink>
                ))}
                <Box sx={{ width: 8 }} />
                <IconButton onClick={toggle} size="small" aria-label="Toggle theme">
                  {mode === 'light' ? (
                    <DarkModeIcon fontSize="small" />
                  ) : (
                    <LightModeIcon fontSize="small" />
                  )}
                </IconButton>
              </Stack>
            ) : (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconButton onClick={toggle} size="small" aria-label="Toggle theme">
                  {mode === 'light' ? (
                    <DarkModeIcon fontSize="small" />
                  ) : (
                    <LightModeIcon fontSize="small" />
                  )}
                </IconButton>
                <IconButton onClick={() => setOpen(true)} aria-label="Open menu">
                  <MenuIcon />
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: '82vw',
            maxWidth: 340,
            backgroundColor: 'background.default',
            borderLeft: 'none',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1.25} alignItems="center" sx={{ pl: 1 }}>
            <BrandMark size={24} />
            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{PROFILE.name}</Typography>
          </Stack>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1.5, mt: 1 }}>
          {PROFILE.sections.map((s) => (
            <ListItem key={s.id} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={(e) => handleClick(e, s.id)}
                sx={{
                  py: 1.75,
                  px: 2,
                  borderRadius: 999,
                  '&:hover': { bgcolor: (t) => t.custom.surfaceContainerHigh },
                }}
              >
                <Typography sx={{ fontSize: 17, fontWeight: 500 }}>
                  {s.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
