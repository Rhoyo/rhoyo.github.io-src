/*

This is the section that will hold my about informatiom

*/

import * as React from "react"
import { Paper } from "@mui/material";
import theme from "../theme";
import { textAlign } from "@mui/system";

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
        <div
            style = {{
                marginLeft: '10vw',
                marginRight: '10vw',
                display: 'flex'
            }}
        >
            <p
                className="centered-p"
            >
                <p
                    style={{textAlign:'center'}}
                >
                    Density.
                </p><br/> 
                Widely recognized by the greek symbol, ρ, rho.
            </p>  
        </div>   
    </Paper>
  )
}

export default About;