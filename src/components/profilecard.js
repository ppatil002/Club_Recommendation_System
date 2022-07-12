import * as React from "react";
import { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Button, CardActionArea, CardActions } from "@material-ui/core";
import DialogActions from "@mui/material/DialogActions";
/*import DialogContent from '@mui/material/DialogContent';*/
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";

const ProfileCard = (props) => {
  const studentmis = localStorage.getItem("Mis");
  const studentpwd = localStorage.getItem("Password");

  const [opendetails, setOpendetails] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpendetails = (scrollType) => () => {
    setOpendetails(true);
    setScroll(scrollType);
  };

  const handleClosedetails = () => {
    setOpendetails(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  
  const theme = useTheme();
  const [a,setA] = React.useState(0);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (opendetails) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [opendetails]);

  const [open, setOpen] = React.useState(false);

  const [passwordentered, setPasswordentered] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendRequest = () => {
    if(passwordentered===studentpwd){
        const newrequest = [...props.info.requestsreceived];
        if(newrequest.includes(studentmis)){
            alert("Request already sent");
        }
        else{
            newrequest.push(studentmis);
            var body = {
                requestsreceived: newrequest,
                username: props.info.username
            }
            axios
            .put("/api/updatementorrr",body)
            .then((res)=>{
                alert(res.data.message);
        })
        }
        
        handleClose();
    }
    else{
        alert("Incorrect password");
    }
  }
  return (
    <>
      <Card sx={{ minWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafHzR_gbgOTm7BSKDHZrUTh1OgfNLb0RaOw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.info.firstname} {props.info.lastname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.info.username}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen1}>
            Show More Details
          </Button>
          <Button size="small" onClick={handleClickOpen}>
            Send Request
          </Button>
          
            {
              props.info.requestsaccepted.map((items,index) => {
                if(items===localStorage.getItem("Mis")){
                  return(
                    <Button size="small" onClick={handleClickOpen2}>Request Accepted</Button>
                  )
                }
              })
            }


        </CardActions>
      </Card>

      <Dialog
        fullScreen={fullScreen}
        open={open1}
        onClose={handleClose1}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        {props.info.firstname} {props.info.lastname}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Branch : {props.info.branch}, Year : {props.info.year}
          </DialogContentText>
          <DialogContentText>
            From : {props.info.city}, {props.info.state}
          </DialogContentText>
          <DialogContentText>
            EDUCATION DETAILS
          </DialogContentText>
          <DialogContentText>
            {
                props.info.education.map((items,index) => {
                    return(
                        <>
                        <DialogContentText>
                            {index+1} Education Name: {items.educationName}, Education From:{items.educationFrom
}
                        </DialogContentText>
                        </>
                    )
                })
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose1}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={open2}
        onClose={handleClose2}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        {props.info.firstname} {props.info.lastname}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>Branch : </b>  {props.info.branch}, <b>Year : </b>{props.info.year} 
          </DialogContentText>
          <DialogContentText>
            <b> From :  </b>{props.info.city}, {props.info.state} 
          </DialogContentText>
            <b>Email : </b>{props.info.email}
          <DialogContentText>

          </DialogContentText>
            <b>Contact No. : </b>{props.info.contactno}
          <DialogContentText>
            
          </DialogContentText>
          <DialogContentText>
            <b>EDUCATION DETAILS</b>
          </DialogContentText>
          <DialogContentText>
            {
                props.info.education.map((items,index) => {
                    return(
                        <>
                        <DialogContentText>
                            {index+1} Education Name: {items.educationName}, Education From:{items.educationFrom
}
                        </DialogContentText>
                        </>
                    )
                })
            }
          </DialogContentText>
          <DialogContentText>
            <b>SKILLS</b>
          </DialogContentText>
          <DialogContentText>
            {
                props.info.skills.map((items,index) => {
                    return(
                        <>
                        <DialogContentText>
                            {index+1} Skill Name: {items.skillName}, Skill Level:{items.skillStatus
}
                        </DialogContentText>
                        </>
                    )
                })
            }
        </DialogContentText>
        
        <DialogContentText>
            <b>EXPERIENCE</b>
          </DialogContentText>
        <DialogContentText>
            {
                props.info.experience.map((items,index) => {
                    return(
                        <>
                        <DialogContentText>
                            {index+1} Title: {items.ExperienceTitle}, Description:{items.ExperienceDes}
                        </DialogContentText>
                        </>
                    )
                })
            }
        </DialogContentText>
        <DialogContentText>
            <b>WORK</b>
          </DialogContentText>
        <DialogContentText>
            {
                props.info.work.map((items,index) => {
                    return(
                        <>
                        <DialogContentText>
                            {index+1} Title: {items.wokSampleTitle}, Description:{items.workSampleDes}
                        </DialogContentText>
                        </>
                    )
                })
            }
        </DialogContentText>
        <DialogActions>
          <Button autoFocus onClick={handleClose2}>
            Close
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>

      {/* Dialog for asking password again */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please re-enter your Password here, then your request will be sent!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value = {passwordentered}
            onChange={(e) => setPasswordentered(e.target.value)}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendRequest}>Submit</Button>
        </DialogActions>
      </Dialog>
      {/* Dialog for password ends */}
      </>
  );
};
export default ProfileCard;
