import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import DrawerAppBar from "../../components/Navbar/Navbar";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import LoginIcon from '@mui/icons-material/Login';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import {
  Button,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { Paper } from "@material-ui/core";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

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
  5: "Yess!!",
};

const useStyles = makeStyles({
  root: {
    width: 400,
    display: "flex",
    alignItems: "center",
  },
});

const PersonalForm = () => {
  const [bloodquestion, setBloodquestion] = React.useState(2);
  const [hover1, setHover1] = React.useState(-1);

  const [orphanagequestion, setOrphanagequestion] = React.useState(2);
  const [hover2, setHover2] = React.useState(-1);

  const [coding, setCoding] = React.useState(2);
  const [hover3, setHover3] = React.useState(-1);

  const [research, setResearch] = React.useState(2);
  const [hover4, setHover4] = React.useState(-1);

  const [writing, setWriting] = React.useState(2);
  const [hover5, setHover5] = React.useState(-1);

  const [vehicle, setVehicle] = useState("Not Interested");
  const [space, setSpace] = useState("Not Interested");

  const [management, setManagement] = useState("No");
  const [acc, setAcc] = useState("No");
  const [publicspeaking, setPublicSpeaking] = useState("No");
  const [cultural, setCultural] = useState("No");
  const [anc, setAnc] = useState("No");
  const [civil, setCivil] = useState("No");

  const [indoor, setIndoor] = React.useState({
    chess: false,
    carrom: false,
    yoga: false,
  });

  const [outdoor, setOutdoor] = React.useState({
    cricket: false,
    football: false,
    basketball: false,
    fencing:false,
    boating:false,
    athletics:false
  });

  const handleindoorChange = (event) => {
    setIndoor({
      ...indoor,
      [event.target.name]: event.target.checked,
    });
  };

  const handleoutdoorChange = (event) => {
    setOutdoor({
      ...outdoor,
      [event.target.name]: event.target.checked,
    });
  };

  const { chess, carrom ,yoga  } = indoor;

  const { cricket, football,basketball, fencing, boating, athletics } = outdoor;

  const VehicleSelection = (event) => {
    setVehicle(event.target.value);
  };

  function onChangeAccValue(event) {
    setAcc(event.target.value);
  }

  function onChangeCulturalValue(event) {
    setCultural(event.target.value);
  }

  function onChangeCivilValue(event) {
    setCivil(event.target.value);
  }

  function onChangeANCValue(event) {
    setAnc(event.target.value);
  }

  function onChangePublicSpeakingValue(event) {
    setPublicSpeaking(event.target.value);
  }

  const SpaceSelection = (event) => {
    setSpace(event.target.value);
  };

  function onChangeManagementValue(event) {
    setManagement(event.target.value);
  }

  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    console.log(bloodquestion,orphanagequestion,management,acc,publicspeaking,vehicle,
      coding,space,research,writing,anc,cultural,civil,indoor,outdoor)
    
  };

  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography sx={{ fontSize: 30 }}>
          Student Personal Interests Form
        </Typography>

        {/* Blood Donation Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>Would you like to donate your blood?</Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.root}>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                sx={{ marginTop: "28px" }}
              >
                <Rating
                  name="hover-feedback1"
                  value={bloodquestion}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setBloodquestion(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover1(newHover);
                  }}
                />
              </Box>

              {bloodquestion !== null && (
                <Box ml={2}>
                  {labels[hover1 !== -1 ? hover1 : bloodquestion]}
                </Box>
              )}
            </div>
          </Grid>
        </Grid>

        {/* Orphanage Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Would you like spending your time in an orphanage ?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <div className={classes.root}>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                sx={{ marginTop: "28px" }}
              >
                <Rating
                  name="hover-feedback2"
                  value={orphanagequestion}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setOrphanagequestion(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover2(newHover);
                  }}
                />
              </Box>

              {orphanagequestion !== null && (
                <Box ml={2}>
                  {labels[hover2 !== -1 ? hover2 : orphanagequestion]}
                </Box>
              )}
            </div>
          </Grid>
        </Grid>

        {/* Management Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Do you want to improve your management skills?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={onChangeManagementValue}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* Accounts Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Are you interested in accounts and documentation?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={onChangeAccValue}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* PublicSpeaking Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Do you like interacting with large amount of public?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={onChangePublicSpeakingValue}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* Vehicles Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Are you interested in the mechanics of a vehicle?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }} fullWidth>
              <InputLabel id="demo-simple-select-label">Vehicles</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vehicle}
                label="Vehicles"
                onChange={VehicleSelection}
              >
                <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
                <MenuItem value={"Bikes"}>Bikes</MenuItem>
                <MenuItem value={"F1 Cars"}>F1 Cars</MenuItem>
                <MenuItem value={"Off-Road"}>Off-Road</MenuItem>
                <MenuItem value={"Electric Cars"}>Electric Cars</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Coding Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Do you like competitive programming, web development or Android
                ?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <div className={classes.root}>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                sx={{ marginTop: "28px" }}
              >
                <Rating
                  name="hover-feedback3"
                  value={coding}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setCoding(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover3(newHover);
                  }}
                />
              </Box>

              {coding !== null && (
                <Box ml={2}>{labels[hover3 !== -1 ? hover3 : coding]}</Box>
              )}
            </div>
          </Grid>
        </Grid>

        {/* Space Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Are you interested in studying the universe beyond earth?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }} fullWidth>
              <InputLabel id="demo-simple-select-label">Space</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={space}
                label="Space"
                onChange={SpaceSelection}
              >
                <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
                <MenuItem value={"Astronomical Phenomenon"}>
                  Astronomical Phenomenon
                </MenuItem>
                <MenuItem value={"Satellites"}>Satellites</MenuItem>
                <MenuItem value={"Radio"}>Radio</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Research Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Are you interested to gather evidence for theories and research?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <div className={classes.root}>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                sx={{ marginTop: "28px" }}
              >
                <Rating
                  name="hover-feedback4"
                  value={research}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setResearch(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover4(newHover);
                  }}
                />
              </Box>

              {research !== null && (
                <Box ml={2}>{labels[hover4 !== -1 ? hover4 : research]}</Box>
              )}
            </div>
          </Grid>
        </Grid>

        {/* writing Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>Are you fond of creative writing?</Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <div className={classes.root}>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                sx={{ marginTop: "28px" }}
              >
                <Rating
                  name="hover-feedback5"
                  value={writing}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setWriting(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover5(newHover);
                  }}
                />
              </Box>

              {writing !== null && (
                <Box ml={2}>{labels[hover5 !== -1 ? hover5 : writing]}</Box>
              )}
            </div>
          </Grid>
        </Grid>

        {/* Crafts and Decoration */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>Do you like art, craft and decoration?</Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={onChangeANCValue}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* Cultural */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Are you interested in acting, drama, dancing, plays, set design
                ?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={onChangeCulturalValue}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* Civil Question */}
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              sx={{ marginTop: "28px" }}
            >
              <Typography>
                Do you wish to serve your nation in future?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <FormControl sx={{ marginTop: "28px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={onChangeCivilValue}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* Checkboxes */}
        <Grid container spacing={2}>
          <Grid item xs ={6}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Indoor Games you like</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={chess}
                      onChange={handleindoorChange}
                      name="chess"
                    />
                  }
                  label="Chess"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={carrom}
                      onChange={handleindoorChange}
                      name="carrom"
                    />
                  }
                  label="Carrom"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={yoga}
                      onChange={handleindoorChange}
                      name="yoga"
                    />
                  }
                  label="Yoga"
                />
              </FormGroup>
              
            </FormControl>
            </Grid>
            <Grid item xs ={6}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Outdoor Games you like</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cricket}
                      onChange={handleoutdoorChange}
                      name="cricket"
                    />
                  }
                  label="Cricket"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={football}
                      onChange={handleoutdoorChange}
                      name="football"
                    />
                  }
                  label="Football"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={basketball}
                      onChange={handleoutdoorChange}
                      name="basketball"
                    />
                  }
                  label="Basketball"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fencing}
                      onChange={handleoutdoorChange}
                      name="fencing"
                    />
                  }
                  label="Fencing"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={boating}
                      onChange={handleoutdoorChange}
                      name="boating"
                    />
                  }
                  label="Boating"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={athletics}
                      onChange={handleoutdoorChange}
                      name="athletics"
                    />
                  }
                  label="Athletics"
                />
              </FormGroup>
              
            </FormControl>
            </Grid>
        </Grid>

        <Grid item xs={6} >
              <Button
                color="primary"
                startIcon={<LoginIcon />}
                variant="outlined"
                fullWidth
                onClick={submit}
              >
                Submit{" "}
              </Button>{" "}
            </Grid>{" "}
      </Box>
    </>
  );
};
export default PersonalForm;
