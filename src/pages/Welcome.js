import React from "react";
import {
    Grid,
    Typography,
    TextField,
    Container,
    Paper,
    // Button,
  } from "@mui/material";
  import HowToRegIcon from '@mui/icons-material/HowToReg';
  import ProfileUi from 'react-profile-card';
  import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "../styles/welcome.css"

const WelcomePage = () => {
  // const [state, setState] = React.useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width:750 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //     onClose={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  localStorage.clear();

  return (
    <>
      <div className="welcome">
        <h1>Welcome Page</h1>

        <Grid item xs={12} sm={12}>
              <Button
                color="primary"
                startIcon={<HowToRegIcon />}
                variant="outlined"
                fullWidth
                onClick={event =>  window.location.href='/mentorlogin'}
              >
                Login - Mentor{" "}
              </Button>{" "}
        </Grid>{" "}

        <Grid item xs={12} sm={12}>
              <Button
                color="primary"
                startIcon={<HowToRegIcon />}
                variant="outlined"
                fullWidth
                onClick={event =>  window.location.href='/studentlogin'}
              >
                Login - Student{" "}
              </Button>{" "}
        </Grid>{" "}


        {/* <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div> */}

        {/* <div> 
      <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='vineet jk' 
          designation='designer' 
          />
    </div> */}
    </div>
    </>
  );
};

export default WelcomePage;


