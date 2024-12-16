/* 

This is the component that will hold the button that allows the user to scroll to top

*/

import * as React from "react"
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollTo: React.FC = () => {
    return (
        <IconButton
            onClick={() => {
                handleScrollToTop();
            }}
            style={
                {
                    position: 'fixed',
                    right: '3vw',
                    bottom: '5vw',
                    zIndex: 1000,
                    padding: 0,
                }
            }
        >
            <ArrowCircleUpIcon />
        </IconButton>
    );
}

export default ScrollTo;