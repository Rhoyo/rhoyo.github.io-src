/* 

This is the component that will host the website components

*/
import * as React from "react"
import theme from "../style/theme";
import Paper from '@mui/material/Paper';
import Website from "./website";

interface PortfolioProps {
    links: string[]
    titles: string[]
}

const Portfolio: React.FC<PortfolioProps> = ({ links, titles }) => {
  return (
    <Paper
        elevation={0.5}
        className = 'portfolio'
    >
        {
            links.map((link, idx) => {
                return (
                    <Website
                        link = {link}
                        title = {titles[idx]}
                    />
                )
            })
        }
    </Paper>
  );
};

export default Portfolio;