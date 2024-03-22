import * as React from "react"
import theme from "../theme";
import AppBar from '@mui/material/AppBar'
import NavigationBar from "./nav";

const Header = () => {
  return (
    <AppBar
      className = 'header'
    >
      <NavigationBar/>
    </AppBar>
  )
}

export default Header;