/* 

This is the component that will hold the button that allows the user to scroll to top

*/

import * as React from "react"
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Paper } from "@mui/material";
import '../style/components.css';

const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const ScrollTo: React.FC = () => {
    return (
        <IconButton
            onClick = { () => {
                handleScrollToTop();
            }}
            style = {
                {
                    position: 'absolute',
                    right: '5vw',
                    bottom: '5vw'
                }
            }
        >
            <ArrowCircleUpIcon/>
        </IconButton>
    );
}

export default ScrollTo;