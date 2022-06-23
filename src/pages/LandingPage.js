import React, {Component} from "react";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import { Button, Grid } from "@material-ui/core";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

const LandingPage = () => {
  let cursor = {
    show: true,
    element: "|",
    hideWhenDone: true,
  };

  return (
    <div className="landing">
      <Grid container justify="center">
        <div
          style={{
            fontFamily: "Rubik",
            fontSize: "2em",
            color: "black",
            marginLeft: "1em",
            marginRight: "1em",
            textAlign: "center",
          }}
        >

<Typist>
  <span className="my-custom-class"> First Sentence </span>
  <br />
  <div className="container">
    <p> This will be animated after first sentence is complete </p>
    <MyComponent prop1="val1"> More text. </MyComponent>
  </div>
  Final sentence
</Typist>

            <div>
            {/* <h1 style={{ paddingBottom: 15 }} className="heading"> */}
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </div>
          <br />
          <br />
          <Fade bottom delay={11000}>
            Welcome to !
          </Fade>
          <br />
          <Fade bottom delay={12000}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button
                endIcon={<ArrowForwardIcon />}
                size="large"
                variant="contained"
                style={{
                  backgroundColor: "#003c6c",
                  color: "white",
                  fontFamily: "Rubik",
                  fontSize: "0.5em",
                }}
              >
                Learn more
              </Button>
            </Link>
          </Fade>
        </div>
      </Grid>
    </div>
  );
};

export default LandingPage;