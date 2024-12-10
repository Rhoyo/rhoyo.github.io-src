import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import theme from "../theme"; 
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const toggleDrawer = (open: boolean, opacity: number) => {
    setDrawerOpen(open);
    setButtonOpacity(opacity);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <IconButton
        style = {{
          color: theme.palette.secondary.main,
          opacity: buttonOpacity,
          margin: theme.spacing(1),
          backgroundColor: 'transparent', 
        }}
       onClick={
        () => {
          toggleDrawer(true, 0)   
        }
       }
       >
        <MenuIcon/>
       </IconButton>

      <Drawer 
        anchor="top" 
        open={isDrawerOpen} 
        onClose={() => toggleDrawer(false, 1)}
        
      >
        <List
          style={
            typeof window !== 'undefined' && window.outerWidth > 450 ?     
              {
                display: 'flex',
                background: 'rgba(5,32,14, 0.8)'
              }
            :
              {
                maxHeight: '150px',
                overflow: 'auto',
                background: 'rgba(5,32,14, 0.8)'
              }
        }
        >
          <ListItem
            className='header-list-item'
          >
            <Button 
              variant="text"
              onClick={
                () => {
                  scrollToSection('about')
                }
              }>
              About
            </Button>
          </ListItem>
          <ListItem
            className='header-list-item'
          >
            <Button 
                variant="text"
                onClick={
                  () => {
                    scrollToSection('resume')
                  }
                }>
                Resume
            </Button>
          </ListItem>
          <ListItem
            className='header-list-item'
          >
            <Button 
              href="https://www.linkedin.com/in/ryan-ho-97a563227/" 
              variant="text">
              Linkedin
            </Button>
          </ListItem>
          <ListItem
            className='header-list-item'
          >
            <Button 
              href="https://github.com/rhoyo" 
              variant="text">
              Github
            </Button>
          </ListItem>
          <ListItem
            className='header-list-item'
          >
            <Button
              href="/wave"
              variant="text"
            >
                Three.js Sandbox: Wave
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavigationBar;
