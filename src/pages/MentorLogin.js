import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Container,
  Paper,
  Button,
} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useHistory } from "react-router-dom";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import axios from "axios";

const MentorLogin = () => {

  const history = useHistory()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(username===""  || password===""){
        alert("Please enter all details");
    }
    else{
        var body = {
            username: username,
            password: password
        }
        axios
      .post("http://localhost:9000/mentorlogin", body)
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === "Mentor Login Successful") {
          localStorage.setItem("Token", res.data.token);
          localStorage.setItem("Mis", res.data.username);
          localStorage.setItem("Password", res.data.password);
          const token = localStorage.getItem("Token");
          if (token) {
            alert("Login Successful");
          } else {
            alert("Login failed try after sometime");
          }
        } else {
          alert("Incorrect Credentials!");
        }
      });
    }
    
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <center>
            <Typography variant="h6" gutterBottom>
              Mentor Login Page{" "}
            </Typography>{" "}
          </center>{" "}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="username"
                name="username"
                label="Username"
                fullWidth
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />{" "}
            </Grid>{" "}

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
            </Grid>{" "}
            
           
            <Grid item xs={12} sm={12}>
              <Button
                color="primary"
                startIcon={<LoginIcon />}
                variant="outlined"
                fullWidth
                onClick={submit}
              >
                Login{" "}
              </Button>{" "}
            </Grid>{" "}

            <Grid item xs={12} sm={12}>
              <Button
                color="primary"
                startIcon={<HowToRegIcon />}
                variant="outlined"
                fullWidth
                onClick={() => history.push("/register")}
              >
                Register - Mentor{" "}
              </Button>{" "}
            </Grid>{" "}

          </Grid>{" "}
        </Paper>{" "}
      </Container>{" "}
    </>
  );
};

export default MentorLogin;
