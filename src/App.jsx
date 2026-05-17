import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Startup from './components/Startup'
import Skills from './components/Skills'
import References from './components/References'
import Faqs from './components/Faqs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Projects />
      <Startup />
      <Skills />
      <References />
      <Faqs />
      <Contact />
      <Footer />
    </Box>
  )
}
