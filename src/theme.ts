// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d1d5ff',
    },
    secondary: {
      main: 'rgba(212,197,255,0.95)',
    },
    background: {
      default: '#000000',
      paper: 'rgba(26,232,114,0.05)',
    },
    text: {
      primary: '#dedede',
      secondary: '#eeeeee',
    },
  },
});

export default theme;