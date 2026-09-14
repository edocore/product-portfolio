import { useState } from 'react'
import { Box, Fade, IconButton, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'

const withBase = (src) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${src}`

/**
 * A clickable thumbnail that expands into a full-screen viewer.
 * Close by tapping the X or clicking the backdrop (outside the image).
 */
export default function Lightbox({ src, alt, thumbSx }) {
  const [open, setOpen] = useState(false)
  const url = withBase(src)

  return (
    <>
      <Box
        role="button"
        tabIndex={0}
        aria-label={`Expand image: ${alt}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(true)}
        sx={{ position: 'relative', cursor: 'zoom-in', '&:hover .lb-zoom': { opacity: 1 } }}
      >
        <Box
          component="img"
          src={url}
          alt={alt}
          loading="lazy"
          sx={thumbSx}
        />
        <Box
          className="lb-zoom"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 30,
            height: 30,
            borderRadius: '8px',
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'rgba(10,11,13,0.66)',
            color: '#fff',
            opacity: 0,
            transition: 'opacity 140ms ease',
            pointerEvents: 'none',
          }}
        >
          <ZoomOutMapIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 2, md: 5 } }}
        slotProps={{ backdrop: { sx: { bgcolor: 'rgba(6,8,12,0.82)', backdropFilter: 'blur(4px)' } } }}
      >
        <Fade in={open}>
          {/* Wrapper fills the modal; clicking it (outside the image) closes. */}
          <Box
            onClick={() => setOpen(false)}
            sx={{
              outline: 'none',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              aria-label="Close image"
              sx={{
                position: 'fixed',
                top: 16,
                right: 16,
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.12)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.24)', color: '#fff' },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={url}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 30px 90px rgba(0,0,0,0.5)',
                cursor: 'default',
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
