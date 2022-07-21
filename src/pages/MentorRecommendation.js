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
import MentorCard from './MentorCard';
import ProfileCard from '../components/profilecard';

const MentorRecommendation = () => {

    const [mentorlist, setMentorlist] = useState([]);
    const [selmentor,setSelmentor] = useState([]);

    useEffect(() => {
        axios
        .get("https://club-recommendation-system.herokuapp.com/mentorlist")
        .then((res) => setMentorlist(res.data))
          .catch((error) => console.log(error));
      },[]);

    var abc = localStorage.getItem("clubs")
  var clubs = JSON.parse(localStorage.getItem("clubs"));
    return (
        <>
        <DrawerAppBar />
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Typography sx={{ fontSize: 30,marginBottom:"40px" }}>
              List of mentors you can contact
            </Typography>
            <Box sx={{ paddingX: 20 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {mentorlist.length > 0 ? (
          mentorlist.map((items) => {
            items.clubs.map((ind)=>{
                if(abc.includes(ind) && !selmentor.includes(items.username)){
                    console.log(selmentor)
                    selmentor.push(items.username)
                }
            })
          })
        ) : (
          <>
            <div></div>
          </>
        )}
            </Grid>
            <Grid container spacing={2}>
            {mentorlist.length > 0 ? (
          mentorlist.map((items) => {
            if(selmentor.includes(items.username)){
                return(
                    <>
                    <Grid item xs={2} sm={4} md={4}>
                <ProfileCard info={items}/>
                  </Grid>
                    </>
                )
            }
          })
        ) : (
          <>
            <div>No passes</div>
          </>
        )}
            </Grid>
            </Box>
    
          </Box>
          </>
  )
}
export default MentorRecommendation;