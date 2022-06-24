import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";

const MentorCard = (props) => {

  

    
    const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [a,setA] = React.useState(0);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafHzR_gbgOTm7BSKDHZrUTh1OgfNLb0RaOw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.info.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            "huhhu"
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Show More Details
          </Button>
          <Button size="small" >
            Send Request
          </Button>
        </CardActions>
      </Card>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
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
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default MentorCard;
