import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import theme from "../theme";

const NavigationBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <IconButton
        style = {{
          color: theme.palette.secondary.main
        }}
       onClick={
        () => toggleDrawer(true)
       }
       >
        Menu
       </IconButton>

      <Drawer anchor="top" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavigationBar;
