import React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const theme = createTheme()

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
]

const Blog: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />

        <main>
          <Outlet />
        </main>
      </Container>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export default Blog
