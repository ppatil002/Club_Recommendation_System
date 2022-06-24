import React,{useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import ClubCard from './ClubCard';
import DrawerAppBar from '../components/Navbar/Navbar';
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@mui/material/Toolbar";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
    Container,
  } from "@mui/material";
  import axios from "axios";

const ClubList = () => {

  const [clublist, setClublist] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:9000/clublist")
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
        <Container  style={{ marginTop: "55px" }}>
      <Grid container style={{ marginTop: "10px" }}>
        {clublist.length > 0 ? (
          clublist.map((items) => {
            console.log(items)
            if (abc.includes(items.name)) {
              return (
                <ClubCard info = {items}/>
              );
            }
          })
        ) : (
          <>
            <div>No passes</div>
          </>
        )}
      </Grid>
      </Container>

      </Box>
      </>
  )
}
export default ClubList;