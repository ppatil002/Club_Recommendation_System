// import React from "react";
import React, { useState, Component } from "react";
import {
  Grid,
  Typography,
  TextField,
  Container,
  Paper,
  Button,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useHistory } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Register = () => {
  const [branch, setBranch] = React.useState("");

  const BranchSelection = (event) => {
    setBranch(event.target.value);
  };

  const history = useHistory();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [mis, setMis] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const verify = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      mis === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please enter all details");
    } else if (password !== confirmPassword) {
      alert("Match not Matched");
    } else {
      var body = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        mis: mis,
        password: password,
        confirmPassword: confirmPassword,
      };
      axios.post("http://localhost:9000/userlogin", body).then((res) => {
        alert(lastname);
      });
    }
  };

  return (
    <>
      <h1>Register Page</h1>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <center>
            <Typography variant="h6" gutterBottom>
              Register Page{" "}
            </Typography>{" "}
          </center>{" "}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="firstname"
                name="firstname"
                label="Firstname"
                fullWidth
                variant="standard"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="lastname"
                name="lastname"
                label="Lastname"
                fullWidth
                variant="standard"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />{" "}
            </Grid>{" "}
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
              <FormControl fullWidth xs={12} sm={12}>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch}
                  label="Branch"
                  onChange={BranchSelection}>
                  <MenuItem value={10}>Computer</MenuItem>
                  <MenuItem value={20}>Civil</MenuItem>
                  <MenuItem value={30}>Electronics</MenuItem>
                  <MenuItem value={40}>Electrical</MenuItem>
                  <MenuItem value={50}>Instumentation</MenuItem>
                  <MenuItem value={60}>Mechanical</MenuItem>
                  <MenuItem value={70}>Metalurgy</MenuItem>
                  <MenuItem value={80}>Production</MenuItem>
                </Select>
              </FormControl>
              </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="mis"
                name="mis"
                label="MIS"
                fullWidth
                variant="standard"
                value={mis}
                onChange={(e) => setMis(e.target.value)}
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
              <TextField
                required
                id="confirmpassword"
                name="confirmpassword"
                label="Confirm Password"
                fullWidth
                variant="standard"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={12}>
              <Button
                color="primary"
                startIcon={<LoginIcon />}
                variant="outlined"
                fullWidth
                // onClick={submit}
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
                onClick={verify}>
                Register{" "}
              </Button>{" "}
            </Grid>{" "}
            
          </Grid>{" "}
        </Paper>{" "}
      </Container>{" "}
    </>
  );
};

export default Register;
