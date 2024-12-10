import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"
import '../style/components.css';

// components
import WaveScene from "../components/waveScene";

const WavePage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{
        backgroundColor: theme.palette.background.default, 
        minHeight: '100vh', 
        color: theme.palette.text.primary,
      }}>
      <div className="waveScene">
        <WaveScene/>
      </div>
      </main>
    </ThemeProvider>
  )
}

export default WavePage;

export const Head: HeadFC = () => <title>Rho: waveScene</title>
