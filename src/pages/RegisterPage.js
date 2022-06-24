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
import "../styles/mentorlogin.css";

//import PasswordField from 'material-ui-password-field';

const Register = () => {

  const history = useHistory();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [mis, setMis] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");

  const BranchSelection = (event) => {
    setBranch(event.target.value);
  };

  const YearSelection = (event) => {
    setYear(event.target.value);
  }

  const verify = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      mis === "" ||
      password === "" ||
      confirmPassword === "" || year === "" || branch === ""
    ) {
      alert("Please enter all details");
    } else if (password !== confirmPassword) {
      alert("Password did not match");
    } else {
      var body = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        mis: mis,
        password: password,
        confirmPassword: confirmPassword,
        branch: branch,
        year: year
      };
      axios.post("http://localhost:9000/register", body).then((res) => {
        alert(res.data.message);
        window.location.href = "/studentlogin"
      });
    }
  };

  return (
    <>
    <div className="mentorlogin">
      <h1>Register Page</h1>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }} className="boxbackground">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <center>
            <Typography variant="h6" gutterBottom>
              Register Page{" "}
            </Typography>{" "}
          </center>{" "}
          <Grid container spacing={3}>

            {/* Firstname TextField */}
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

            {/* Lastname TextField */}
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

            {/* username TextField */}
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

            {/* Year dropdown */}
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth xs={12} sm={12}>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Year"
                  onChange={YearSelection}>
                  <MenuItem value={"FY"}>FY</MenuItem>
                  <MenuItem value={"SY"}>SY</MenuItem>
                  <MenuItem value={"TY"}>TY</MenuItem>
                  <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
                </Select>
              </FormControl>
              </Grid>

            {/* Branch dropdown */}
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth xs={12} sm={12}>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch}
                  label="Branch"
                  onChange={BranchSelection}>
                  <MenuItem value={"Computer"}>Computer</MenuItem>
                  <MenuItem value={"Civil"}>Civil</MenuItem>
                  <MenuItem value={"Electronics"}>Electronics</MenuItem>
                  <MenuItem value={"Electrical"}>Electrical</MenuItem>
                  <MenuItem value={"Instrumentation"}>Instumentation</MenuItem>
                  <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
                  <MenuItem value={"Metallurgy"}>Metallurgy</MenuItem>
                  <MenuItem value={"Production"}>Production</MenuItem>
                </Select>
              </FormControl>
              </Grid>

            {/* mis TextField */}
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

            {/* password textfield */}
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

            {/* confirm password TextField */}
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

            {/* Button Register*/}
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

            {/* Login button */}
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
            
            
          </Grid>{" "}
        </Paper>{" "}
      </Container>{" "}
      </div>
    </>
  );
};

export default Register;
