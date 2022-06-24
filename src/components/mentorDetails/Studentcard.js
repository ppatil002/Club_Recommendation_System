import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

const StudentCard = (props) => {

    const AcceptRequest = () => {
        if(1){
            const newrequest = [...props.ra];
            if(newrequest.includes(props.info.mis)){
                alert("Request already sent");
            }
            else{
                newrequest.push(props.info.mis);
                var body = {
                    requestsaccepted: newrequest,
                    username: localStorage.getItem("Mentorusername")
                }
                console.log(body)
                axios
                .put("http://localhost:9000/updatementorra",body)
                .then((res)=>{
                    alert("Request Accepted Successfully");
            })
            }
            
        }
        else{
            alert("Incorrect password");
        }
      }

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
            {props.info.firstname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.info.branch}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={AcceptRequest}>
            Accept Request
          </Button>
        </CardActions>
      </Card>

    </>
  );
};
export default StudentCard;
