import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"
import '../style/components.css';

// components
import ScrollTo from "../components/scrollTo";
import WaveScene from "../components/waveScene";
import Website from "../components/website";
import Portfolio from "../components/portfolio";

const PortfolioProps = {
  links: [
    'https://www.cpb.bank/',
    'https://boardofwatersupply.com/',
    'resume',
  ],
  titles: [
    'Central Pacific Bank',
    'Board of Water Supply',
    'Resume',
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
      <WaveScene/>
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>rho</title>
