import { Box } from '@mui/material'
import { useInView } from '../hooks/useInView'

// Fades + rises its children when scrolled into view. `delay` (ms) staggers
// siblings; `y` sets the travel distance. Honors prefers-reduced-motion.
export default function Reveal({ children, delay = 0, y = 24, sx, ...rest }) {
  const [ref, seen] = useInView()
  return (
    <Box
      ref={ref}
      sx={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : `translateY(${y}px)`,
        transition: `opacity 600ms ease ${delay}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'none',
          transition: 'none',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}
