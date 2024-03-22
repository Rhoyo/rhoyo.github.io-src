/* 

This is the component that will hold the button that allows the user to scroll to top

*/

import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import theme from "../theme"; 
import '../style/components.css';

const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const ScrollTo: React.FC = () => {
    return (
        <>
        <IconButton>

        </IconButton>
        </>
    );
}

export default ScrollTo;