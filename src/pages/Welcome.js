import React from "react";
import {
    Grid,
    Typography,
    TextField,
    Container,
    Paper,
    Button,
  } from "@mui/material";
  import HowToRegIcon from '@mui/icons-material/HowToReg';

const WelcomePage = () => {

  localStorage.clear();

  return (
    <>
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
    </>
  );
};

export default WelcomePage;