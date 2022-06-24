import React from 'react'
import {useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import ClubCard from './ClubCard';
import DrawerAppBar from '../components/Navbar/Navbar';
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
    Container,
  } from "@mui/material";
  import axios from "axios";

const MentorRecommendation = () => {
    var abc = localStorage.getItem("clubs")
  var clubs = JSON.parse(localStorage.getItem("clubs"));
  console.log(abc,clubs)
    return (
        <>
        <DrawerAppBar />
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Typography sx={{ fontSize: 30,marginBottom:"40px" }}>
              List of mentors you can contact
            </Typography>
    
          </Box>
          </>
  )
}
export default MentorRecommendation;