import React,{useEffect, useState} from 'react'
import MentorDrawerAppBar from '../Navbar/MentorNavbar';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import axios from "axios";
import StudentCard from './Studentcard';

const MentorRequestsreceived = () => {

    const [studentlist, setStudentlist] = useState([]);

    const [sel,setSel] = useState([]);

    const [acc,setAcc] = useState([]);

    const [hover,setHover] = useState(0);

    const buttonclick = (e) => {
        e.preventDefault();
        var username = localStorage.getItem("Mentorusername");
        var body = {
            username: username
        }
        axios
        .post("http://localhost:9000/mrr",body)
        .then((res)=>{
            setSel(res.data.requestsreceived);
            setAcc(res.data.requestsaccepted);
        })
        console.log(sel);
        setHover(1);
    }

    useEffect(() => {
        axios
        .get("http://localhost:9000/studentlist")
        .then((res) => setStudentlist(res.data))
          .catch((error) => console.log(error));
      },[]);

      console.log(studentlist)

  return (
    <>
    <MentorDrawerAppBar />
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography sx={{ fontSize: 30,marginBottom:"40px" }}>
          List of Requests you have Received!
        </Typography>
        <Button variant="contained" disableElevation onClick={buttonclick}>
     Check Requests
    </Button>
    <Box sx={{ paddingX: 20 ,paddingY:5}} >
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {hover > 0 ? (
          studentlist.map((items) => {
            if (sel.includes(items.mis)) {
                return(
                    <>
                    <Grid item xs={2} sm={4} md={4}>
                <StudentCard info={items} ra={acc}/>
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
export default MentorRequestsreceived;