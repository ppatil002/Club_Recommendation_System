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
        const newrequest = [...props.requestsreceived];
        if(newrequest.includes(studentmis)){
            alert("Request already sent");
        }
        else{
            newrequest.push(studentmis);
            var body = {
                requestsreceived: newrequest,
                username: props.username
            }
            axios
            .put("http://localhost:9000/updatementorrr",body)
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
    <Grid
      item
      lg={4}
      sm={6}
      md={6}
      xs={12}
      style={{ justifyContent: "center" }}
    >
      <Card
        style={{
          maxWidth: "90vw",
          marginBottom: "1em",
          paddingBottom: "0.5em",
          marginLeft: "2vw",
          marginRight: "2vw",
          marginTop: "25px",
        }}
      >
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="200"
            image="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png"
            alt="image"
          />
          <CardContent style={{ backgroundColor: "#D1D7E0" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ marginBottom: "10px", color: "#2D283E" }}
            >
              {props.username}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              style={{ color: "#2D283E" }}
            >
              {"ugyfy"}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              style={{ color: "#2D283E" }}
            >
              {"wiohie"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ backgroundColor: "#D1D7E0" }}>
          <div
            style={{
              flex: "1",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              size="small"
              style={{
                backgroundColor: "#2D283E",
                color: "#D1D7E0",
                margin: "10px",
              }}
              onClick={handleClickOpen}
            >
              Send Request
            </Button>
            <Button
              size="small"
              style={{
                backgroundColor: "#2D283E",
                color: "#D1D7E0",
                margin: "10px",
              }}
              onClick={handleClickOpendetails("paper")}
            >
              View Details
            </Button>
          </div>
        </CardActions>
      </Card>

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

      <Dialog
        open={opendetails}
        onClose={handleClosedetails}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            textAlign: "center",
            backgroundColor: "#564F6f",
            padding: "15px",
            color: "#D1D7E0",
          }}
        >
          EVENT DETAILS
        </DialogTitle>
        <Divider />
        <DialogContentText
          ref={descriptionElementRef}
          tabIndex={-1}
          style={{
            backgroundColor: "#564F6f",
            padding: "15px",
            color: "#D1D7E0",
          }}
        >
          Event : {"iuuh"}
        </DialogContentText>
        <Divider />
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
          style={{
            backgroundColor: "#564F6f",
            padding: "15px",
            color: "#D1D7E0",
          }}
        >
          Description : {"uuhuh"}
        </DialogContentText>
        <Divider />
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
          style={{
            backgroundColor: "#564F6f",
            padding: "15px",
            color: "#D1D7E0",
          }}
        >
          Date : {"ojjjjjjjj"}
        </DialogContentText>
        <Divider />
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
          style={{
            backgroundColor: "#564F6f",
            padding: "15px",
            color: "#D1D7E0",
          }}
        >
          Time : {"pppppp"}
        </DialogContentText>
        <Divider />
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
          style={{
            backgroundColor: "#564F6f",
            padding: "15px",
            color: "#D1D7E0",
          }}
        >
          Venue : {"oooo"}
        </DialogContentText>
        <Divider />
        <DialogActions style={{ backgroundColor: "#564F6f" }}>
          <Button
            onClick={handleClosedetails}
            style={{ backgroundColor: "#2D283E", color: "#D1D7E0" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default ProfileCard;
