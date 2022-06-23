import React, { useState, Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { Paper } from "@material-ui/core";
import { pink } from "@mui/material/colors";


const labels = {
  0.5: "Least Interested",
  1: "Cold Response",
  1.5: "Haven't thought much",
  2: "Later on",
  2.5: "Neutral",
  3: "Would like to explore",
  3.5: "Seems interesting",
  4: "Interested",
  4.5: "Very Interested",
  5: "Dying to Join",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

const StudentInterest = () => {
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(2);
  const [value4, setValue4] = React.useState(2);
  const [value5, setValue5] = React.useState(2);
  const [hover1, setHover1] = React.useState(-1);
  const [hover2, setHover2] = React.useState(-1);
  const [hover3, setHover3] = React.useState(-1);
  const [hover4, setHover4] = React.useState(-1);
  const [hover5, setHover5] = React.useState(-1);
  const [vehicles, setVehicle] = useState("");
  const [space, setSpace] = useState("");
  const [cultural, setCultural] = useState("");
  const classes = useStyles();
  const [checked, setChecked] = useState([]);

  const elevationValue = 5    

  const checkList = ["ASCI", "CSI", "SDS", "Veloci"];
  // const handleCheck = (event) => {
  //   var updatedList = [...checked];
  //   if (event.target.checked) {
  //     updatedList = [...checked, event.target.value];
  //   } else {
  //     updatedList.splice(checked.indexOf(event.target.value), 1);
  //   }
  //   setChecked(updatedList);
  // };

  const handleChange=(checked)=> {
    this.setState({ checked });
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const VehicleSelection = (event) => {
    setVehicle(event.target.value);
  };

  const SpaceSelection = (event) => {
    setSpace(event.target.value);
  };

  const CulturalSelection = (event) => {
    setCultural(event.target.value);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <>
      <h1>Interest Form</h1>
      <div className={classes.root}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Blood Donation</Typography>

          <Rating
            name="hover-feedback"
            value={value1}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue1(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover1(newHover);
            }}
          />
        </Box>

        {value1 !== null && (
          <Box ml={2}>{labels[hover1 !== -1 ? hover1 : value1]}</Box>
        )}
      </div>

      <div className={classes.root}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Orphanage</Typography>

          <Rating
            name="hover"
            value={value2}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover2(newHover);
            }}
          />
        </Box>

        {value2 !== null && (
          <Box ml={2}>{labels[hover2 !== -1 ? hover2 : value2]}</Box>
        )}
      </div>

      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Maganement Skiils"
        />
      </FormGroup>

      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Accounts And Documentation"
        />
      </FormGroup>

      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Public Interaction"
        />
      </FormGroup>

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth xs={12} sm={12}>
          <InputLabel id="demo-simple-select-label">Vehicles</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vehicles}
            label="Vehicles"
            onChange={VehicleSelection}>
            <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
            <MenuItem value={"Bikes"}>Bikes</MenuItem>
            <MenuItem value={"F1 Cars"}>F1 Cars</MenuItem>
            <MenuItem value={"Off-Road"}>Off-Road</MenuItem>
            <MenuItem value={"Electric Cars"}>Electric Cars</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <div className={classes.root}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Coding</Typography>

          <Rating
            name="hover"
            value={value3}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue3(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover3(newHover);
            }}
          />
        </Box>

        {value3 !== null && (
          <Box ml={2}>{labels[hover3 !== -1 ? hover3 : value3]}</Box>
        )}
      </div>

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth xs={12} sm={12}>
          <InputLabel id="demo-simple-select-label">Exploring Space</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={space}
            label="Space"
            onChange={SpaceSelection}>
            <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
            <MenuItem value={"Astronomical Phenomenon"}>
              Astronomical Phenomenon
            </MenuItem>
            <MenuItem value={"Satellites"}>Satellites</MenuItem>
            <MenuItem value={"Radio"}>Radio</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <div className={classes.root}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Research</Typography>

          <Rating
            name="hover"
            value={value4}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue4(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover4(newHover);
            }}
          />
        </Box>

        {value4 !== null && (
          <Box ml={2}>{labels[hover4 !== -1 ? hover4 : value4]}</Box>
        )}
      </div>

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth xs={12} sm={12}>
          <InputLabel id="demo-simple-select-label">
            Cultural Activites
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cultural}
            label="Cultural"
            onChange={CulturalSelection}>
            <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
            <MenuItem value={"Acting"}>Acting</MenuItem>
            <MenuItem value={"Dancing"}>Dancing</MenuItem>
            <MenuItem value={"Music"}>Music</MenuItem>
            <MenuItem value={"Set Design"}>Set Design</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Crafts and Decoration"
        />
      </FormGroup>

      <div className={classes.root}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Creative writing</Typography>

          <Rating
            name="hover"
            value={value5}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue5(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover5(newHover);
            }}
          />
        </Box>

        {value5 !== null && (
          <Box ml={2}>{labels[hover5 !== -1 ? hover5 : value5]}</Box>
        )}
      </div>

      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Public Speaking"
        />
      </FormGroup>

      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Serving Nation"
        />
      </FormGroup>

      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Interests in Swimming"
        />
      </FormGroup>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultUnChecked color="success" />}
          label="Label"
        />
        <FormControlLabel
          control={<Checkbox defaultUnChecked color="default" />}
          label="1"
        />
        <FormControlLabel
          control={<Checkbox defaultUnChecked color="secondary" />}
          label="2"
        />
        <FormControlLabel control={<Checkbox defaultUnChecked />} label="3" />
        <FormControlLabel control={<Checkbox defaultUnChecked />} label="4" />
      </FormGroup>


      {/* <Box elevation={elevationValue} component={Paper} sx={{ mt: 5, p: 2 }}>
        <div className="checkList">
          <div className="title">Your ClubsList:</div>
          <div className="list-container">
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(item)}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>{`Items checked are: ${checkedItems}`}</div>
      </Box> */}





    </>
  );
};

export default StudentInterest;
