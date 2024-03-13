import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import NavigationBar from "../components/nav"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{
        background: theme.palette.background.default
      }}>
        <Header/>
        <NavigationBar></NavigationBar>
        testing my script
        <Footer/>
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
