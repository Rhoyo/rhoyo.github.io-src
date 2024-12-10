/* 

This is the component that will host the website components

*/
import * as React from "react"
import Paper from '@mui/material/Paper';
import Website from "./website";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

interface PortfolioProps {
    links: string[]
    titles: string[]
}

const Portfolio: React.FC<PortfolioProps> = ({ links, titles }) => {
    return (
        <Paper
            elevation={0.5}
            className='portfolio'
        >
            {
                links.map((link, idx) => {
                    return (
                        <Website
                            link={link}
                            title={titles[idx]}
                        />
                    )
                })
            }
        </Paper>
    );
};

export default Portfolio;