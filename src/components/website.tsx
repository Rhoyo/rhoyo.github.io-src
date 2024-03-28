/* 

This is the component that will host the iframe that'll contain the website I've worked on

*/
import * as React from "react"
import theme from "../style/theme";
import Box from '@mui/material/Box';

interface WebsiteProps {
    link: string
    title: string
}

const Website: React.FC<WebsiteProps> = ({ link, title }) => {
  return (
    <Box
        className = 'website-div'
    >
        <h2
            className = 'website-header'
        >
            {title}
        </h2>
        <iframe
            className = 'website-iframe'
            src = {link}
            title = {title}
            width = {window.document.body.scrollWidth/2}
            height = {window.document.body.scrollHeight/2}
        >
        </iframe>
    </Box>
  );
};

export default Website;