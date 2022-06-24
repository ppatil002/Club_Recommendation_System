import React, { Component } from "react";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import { Button, Grid } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

var message = "This will be animated after first sentence is complete";

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
          }}>
          <div>
            {/* <h1 style={{ paddingBottom: 15 }} className="heading"> */}
            <h2 >Hi There!{"👋🏻"}</h2>
          </div>
          <Fade above delay={1000}>
            New to COEP!
          </Fade>
          <Fade above delay={1500}>
            Confused about Clubs!<br/>
            Want to build your Network
          </Fade>
          <Fade bottom delay={2200}>
            Welcome to Club Recommander!
          </Fade>
          <br />
          <br />
          <Fade bottom delay={2600}>
            <Link  style={{ textDecoration: "none" }}>
              <Button
              onClick={event =>  window.location.href='/home'}
                endIcon={<ArrowForwardIcon />}
                size="large"
                variant="contained"
                style={{
                  backgroundColor: "#003c6c",
                  color: "white",
                  fontFamily: "Rubik",
                  fontSize: "0.5em",
                }}>
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
