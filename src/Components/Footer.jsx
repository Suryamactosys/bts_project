import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(() => ({
  color: "red",
  backgroundColor: "white",
  borderRadius: "50px",
  height: "60px",
  width: "200px",
  "&:hover": {
    backgroundColor: "#FF7E78",
    color: "white",
  },
}));

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF2EF" }}>
      <Box sx={{ backgroundColor: "white", paddingTop: "50px" }}>
        <Box
          sx={{
            backgroundColor: "#FF7E78",
            borderRadius: "75px  0px 75px 0px",
            padding: "30px 0px 30px 80px",
            // marginLeft: "150px",
            display: "flex",
          }}>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "32px",
                fontFamily: "Poppins sans-serif",
              }}>
              Get Started with Us,
              <br />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "28px",
                  fontFamily: "Poppins sans-serif",
                }}>
                Find your Profesional Service
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "40%", paddingTop: "15px" }}>
            <ColorButton variant="contained">Get Started</ColorButton>
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{ backgroundColor: "white" }}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#FF7E78",
                borderRadius: "75px 0px 75px 0px",
                padding: "30px 20px",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                // textAlign: "center",
              }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "32px",
                  fontFamily: "Poppins sans-serif",
                  marginBottom: "20px",
                  textAlign: "left",
                }}>
                Get Started with Us, <br /> Find your Professional Service
              </Typography>
              <ColorButton variant="contained">Get Started</ColorButton>
            </Box>
          </Grid>
        </Grid>
      </Box> */}

      <Box>
        <Box className="footer-distributed">
          <Box className="footer-left">
            <h3>Mactosys</h3>

            <Typography className="footer-links">
              <Link href="#" className="link-1">
                Home
              </Link>

              <Link href="#">Blog</Link>

              <Link href="#">Pricing</Link>

              <Link href="#">About</Link>

              <Link href="#">Faq</Link>

              <Link href="#">Contact</Link>
            </Typography>

            <Typography className="footer-company-name">
              Mactosys © 2023
            </Typography>
          </Box>

          <Box className="footer-center">
            <span>Company Address</span>
            <Box>
              <AddLocationAltIcon />{" "}
              <Typography>
                <span>Vijay Nagar</span> Indore Madhaya Pradesh, India
              </Typography>
            </Box>
            <Box>
              <PhoneIcon /> <Typography>+91 9888888888</Typography>
            </Box>

            <Box>
              <MailIcon /> <Typography>mail@mactosys.com</Typography>
            </Box>
          </Box>

          <Box className="footer-right">
            <Typography className="footer-company-about">
              <span>About the company</span>
              Mactosys Software | Web Development & Design | Mobile App
              Development | Digital Marketing Company.
            </Typography>

            <Box className="footer-icons">
              <Link to="#">
                <FacebookIcon />
              </Link>
              <Link to="#">
                <TwitterIcon />
              </Link>
              <Link to="#">
                <LinkedInIcon />
              </Link>
              <Link to="#">
                <GitHubIcon />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
