import React,{useEffect, useState} from 'react'
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

const ClubList = () => {

  const [clublist, setClublist] = useState([]);

  useEffect(() => {
    axios
    .get("/api/clublist")
    .then((res) => setClublist(res.data))
      .catch((error) => console.log(error));
  },[]);

  var abc = localStorage.getItem("clubs")
  var clubs = JSON.parse(localStorage.getItem("clubs"));
  console.log(abc,clubs)
  return (
    <>
    <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography sx={{ fontSize: 30,marginBottom:"40px" }}>
          List of selected Clubs According to your choices
        </Typography>
        <Box sx={{ paddingX: 20 }} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {clublist.length > 0 ? (
          clublist.map((items) => {
            console.log(items)
            if (abc.includes(items.name)) {
              return (
                <>
                <Grid item xs={2} sm={4} md={4}>
                <ClubCard info = {items}/>
                  </Grid> 
                </>
                
              );
            }
          })
        ) : (
          <>
            <div>No passes</div>
          </>
        )}
      </Grid>
      </Box>
      <Button variant="contained" disableElevation onClick={event =>  window.location.href='/mentor-recommendation'}>
     Check Recommendations
    </Button>

      </Box>
      </>
  )
}
export default ClubList;