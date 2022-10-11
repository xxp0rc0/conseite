import React from "react";
import film from "./film.mp4";
import  "./Homepage.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { display } from "@mui/system";
import { NavLink } from "react-router-dom";
// import Footer from "../components/footer/footer";

const Home = () => {

  return (
    <>
      <div className="home-body">
        <div className="video-banner">
          <video className="video-tag" autoPlay loop muted>
            <source src={film} type="video/mp4" />
          </video>
          <p className="conseite">Conseite</p>
        </div>
        <div>
          <hr className="break-line"></hr>
        </div>
        <div className="rent-info" style={{ textAlign: "center" }}>
          <h3 className="rent-headline">/ &ensp; Renting gear is easy</h3>
          <Grid
            container
            spacing={{ lg: 15, md: 3, sm: 4 }}
            columnSpacing={{ xs: 4, sm: 8 }}
          >
            <Grid item sm={6} md={3} className="rent-step">
              <div>
                <p id="step-one">1. Select Dates</p>
              </div>

              <p className="step-info">Real time inventory</p>
              <br></br>
              <p className="step-info">Low or now deposit</p>
            </Grid>
            <Grid item sm={6} md={3} className="rent-step">
              <p id="step-two">2. Gear arrives</p>
              <p className="step-info">Free shipping*</p>
              <br></br>
              <p className="step-info">Ship or Pickup</p>
            </Grid>
            <Grid item sm={6} md={3} className="rent-step">
              <p id="step-three">3. Shoot</p>
              <p className="step-info">The top gear</p>
              <br></br>
              <p className="step-info">Rent from 1-90 days</p>
            </Grid>
            <Grid item sm={6} md={3} className="rent-step">
              <p id="step-four">4. Easy return</p>
              <p className="step-info">Repack in same box</p>
              <br></br>
              <p className="step-info">Return labels</p>
            </Grid>
          </Grid>
        </div>
        <div>
          <hr className="break-line" style={{ marginTop: "5rem" }}></hr>
        </div>
        <div>
          <h3 className="feature-gear">/ &ensp; Rental gear categories</h3>
          <div>
            <Grid container spacing={14}>
              <Grid item lg={4} sm={6} xs={12} className="thumb-mo">
                <Paper className="thumb-frame">
                  <img
                    className="product-thumb"
                    src={require("../../assets/pentax.png")}
                    alt="cam"
                  ></img>
                </Paper>
                <h3 className="thumb-title">cameras</h3>
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className="thumb-mo">
                <Paper className="thumb-frame">
                  <img
                    className="product-thumb"
                    src={require("../../assets/lens.png")}
                    alt="lens"
                  ></img>
                </Paper>
                <h3 className="thumb-title">lens</h3>
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className="thumb-mo">
                <Paper className="thumb-frame">
                  <img
                    className="product-thumb"
                    src={require("../../assets/tripod.png")}
                    alt="tripod"
                  ></img>
                </Paper>
                <h3 className="thumb-title">tripod</h3>
              </Grid>
            </Grid>
          </div>
        </div>
        <div>
          <hr
            className="break-line"
            style={{
              marginTop: "3rem",
            }}
          ></hr>
        </div>
        <div className="popular-brands" style={{ marginBottom: "3rem" }}>
          <h3
          >
            / &ensp; Popular Brands
          </h3>
          <div>
            <Grid container spacing={3} className="pop-list">
              <Grid item xs={4} lg={2} sm={3}>
                <img
                  className="brandss"
                  alt="logo"
                  src={require("../../assets/canon.png")}
                ></img>
              </Grid>
              <Grid item xs={4} lg={2} sm={3}>
                <img
                  className="brandss"
                  alt="logo"
                  src={require("../../assets/fujilogo.png")}
                ></img>
              </Grid>
              <Grid item xs={4} lg={2} sm={3}>
                <img
                  className="brandss"
                  alt="logo"
                  src={require("../../assets/minolta.png")}
                ></img>
              </Grid>
              <Grid item xs={4} lg={2} sm={3}>
                <img
                  className="brandss"
                  alt="logo"
                  src={require("../../assets/pentaxlogo.png")}
                ></img>
              </Grid>
              <Grid item xs={4} lg={2} sm={3}>
                <img
                  className="brandss"
                  alt="logo"
                  src={require("../../assets/nikon.png")}
                ></img>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
