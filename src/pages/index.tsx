import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import About from "../components/about"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"
import PaperCard from "../components/paperCard"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{
        backgroundColor: theme.palette.background.default, 
        minHeight: '100vh', 
        color: theme.palette.text.primary,
        // display: 'flex'
      }}>
        <Header/>
        <About/>
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
