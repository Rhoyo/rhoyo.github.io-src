import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import NavigationBar from "../components/nav"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"
import PaperCard from "../components/paperCard"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{
        backgroundColor: theme.palette.background.default, 
        minHeight: '100vh', 
        padding: theme.spacing(2), 
        color: theme.palette.text.primary,
      }}>
        <Header/>
        <NavigationBar></NavigationBar>
        testing my script
        <PaperCard
          text="this is text testing my paperCard.tsx component with props"
          elevation={1}/>
        <Footer/>
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
