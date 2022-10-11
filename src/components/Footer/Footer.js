import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { fontSize } from "@mui/system";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Input from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";
import styles from './Footer.scss'

const Footer = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className="social-contact">
          <Grid className="social-grid" item xs={12} md={6}>
            <div className="social-media">
              <p>
                Follow us{" "}
                <InstagramIcon
                  className="social-icon"
                  fontSize="large"
                ></InstagramIcon>{" "}
                <span className="here">here</span>,{" "}
                <YouTubeIcon
                  className="social-icon"
                  fontSize="large"
                ></YouTubeIcon>{" "}
                <span className="here">here</span>, and{" "}
                <FacebookIcon
                  className="social-icon"
                  fontSize="large"
                ></FacebookIcon>{" "}
                <span className="here">here</span>. Oh,{" "}
                <PinterestIcon
                  className="social-icon"
                  fontSize="large"
                ></PinterestIcon>{" "}
                <span className="here">here</span>{" "}
                <LinkedInIcon
                  className="social-icon"
                  fontSize="large"
                ></LinkedInIcon>{" "}
                <span className="here">here</span> and{" "}
                <TelegramIcon
                  className="social-icon"
                  fontSize="large"
                ></TelegramIcon>{" "}
                <span className="here">here</span> too.
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="mail">
              <div id="mail-title">
                <p id="whatever">
                  Whatever we're up to, <br></br>we'll keep you posted!
                </p>
              </div>
              <div>
                <p class="newsletter">newsletter</p>
              </div>
              <div>
                <Box
                  className="email-box"
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <FormControl sx={{ width: "25rem" }}>
                    <Input
                      id="standard-basic"
                      placeholder="Your email address"
                    />
                  </FormControl>
                </Box>
              </div>
              <div>
                <Button
                  className="email-button"
                  variant="contained"
                  style={{
                    marginTop: "2rem",
                    backgroundColor: "black",
                    borderRadius: "0",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    boxShadow: "none",
                  }}
                >
                  Get on our list
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div className="contact">
        <p>
          <span>84 24 686868</span>
          <span>info@byconseite</span>
          <span> 1B Le Phung Hieu, Hoan Kiem, Hanoi</span>
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "20vw" }}>Conseite</h1>
      </div>
    </>
  );
};

export default Footer;
