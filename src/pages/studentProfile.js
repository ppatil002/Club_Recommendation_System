import React,{ useState, Component,useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ProfileCard from "../components/profilecard";
import AssistantIcon from '@mui/icons-material/Assistant';
import axios from "axios";
import {
  Grid,
} from "@mui/material";
import StudentNavbar from "../components/StudentNavbar";
import DrawerAppBar from "../components/Navbar/Navbar";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const cars = ["Saab", "Volvo", "BMW","abc"];

const StudentProfile = () => {

  var studentmis = localStorage.getItem("Mis");
  const [mentorlist, setMentorlist] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://club-recommendation-system.herokuapp.com/mentorlist")
      .then((res) => setMentorlist(res.data))
      .catch((error) => console.log(error));
  }, []);


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <DrawerAppBar />
    <Container  style={{ marginTop: "55px" }}>
      <Grid container style={{ marginTop: "10px" }}>
        {mentorlist.length > 0 ? (
          mentorlist.map((items) => {
            console.log(items)
            if (1) {
              return (
                <ProfileCard username ={items.username} requestsreceived = {items.requestsreceived}/>
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

    </>
  );
};

export default StudentProfile;
