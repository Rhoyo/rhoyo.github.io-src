/* 

This is the component that will host the iframe that'll contain the website I've worked on

*/
import * as React from "react"
import * as THREE from 'three'
import Box from '@mui/material/Box';
import resumePDF from '../resources/resume.pdf';

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
        { link != 'resume' ?
            <iframe
                className = 'website-iframe'
                src = {
                    link
                }
                title = {title}
            >
            </iframe>
            :
            <embed
                className = 'website-iframe'
                src = {
                    resumePDF + '#toolbar=0'
                }
                title = {title}
            >
            </embed>
        }
    </Box>
  );
};

export default Website;