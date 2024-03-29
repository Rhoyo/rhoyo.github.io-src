import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"
import '../style/components.css';

// components
import Header from "../components/header"
import Footer from "../components/footer"
import About from "../components/about"
import Website from "../components/website";
import ScrollTo from "../components/scrollTo";
import Portfolio from "../components/portfolio";


const PortfolioProps = {
  links: [
    'https://www.cpb.bank/',
    'https://boardofwatersupply.com/',
  ],
  titles: [
    'Central Pacific Bank',
    'Board of Water Supply'
  ]
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{
        backgroundColor: theme.palette.background.default, 
        minHeight: '100vh', 
        color: theme.palette.text.primary,
      }}>
        <Header/>
        <About/>
        <Portfolio
          links = {PortfolioProps.links}
          titles = {PortfolioProps.titles}
        />
        <ScrollTo/>

      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
