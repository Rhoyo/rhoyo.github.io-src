/*

This is the section that will hold my about informatiom

*/

import * as React from "react"
import { Paper } from "@mui/material";
import theme from "../theme";

const About: React.FC = () => {
  return (
    <Paper
        elevation={2}
        style = {{
            marginLeft: '20vw',
            marginRight: '20vw'
        }}
    >
        <h1
            className="centered-text"
        >
            ρ
        </h1>
        <p
            className="centered-text"
            style = {{
                padding: '5vw'
            }}
        >
            Density.
            <br/>
            <br/>
            Widely recognized by the greek symbol, ρ, rho.
        </p> 
    </Paper>
  )
}

export default About;