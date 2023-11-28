import { Box, Button, Container, Typography } from "@mui/material";
// import bannerimg from "../assets/Homeimg/bannerimg.png";
import styled from "@emotion/styled";
import banner from "../assets/Homeimg/konveer.png";
import "./Home.css";

const ColorButton = styled(Button)(() => ({
  // color: theme.palette.getContrastText("red"[500]),
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "White",
    color: "red",
  },
}));

const Home = () => {
  return (
    <Container>
      {/* <Box
        sx={{
          float: "left",
          width: "40%",
          paddingLeft: "20px",
          paddingTop: "90px",
        }}>
        <Typography sx={{ color: "red", fontSize: "28px", fontWeight: "500" }}>
          AI-Powered Tranning Data
        </Typography>
        <Typography sx={{ fontWeight: "500" }}>
          The best landing page design inspiration from around the web. Lapa
          Ninja is created to help designers find inspiration, learn and improve
          design skills
        </Typography>
        <ColorButton
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "red",
            marginTop: "20px",
            height: "50px",
          }}>
          Request Quote
        </ColorButton>{" "}
        <ColorButton
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "red",
            marginTop: "20px",
            height: "50px",
          }}>
          Contact Sales
        </ColorButton>
        <Typography sx={{ marginTop: "20px" }}>
          Get Early access to our upcomming Tranning
        </Typography>
        <TextField
          placeholder="Enter your Email"
          variant="standard"
          sx={{ paddingTop: "30px" }}
        />
        <ColorButton
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "red",
            marginTop: "20px",
            height: "40px",
            borderRadius: "30px",
          }}>
          Request Acccess
        </ColorButton>
      </Box> */}
      <Box>
        <Box
          sx={{
            float: "left",
            width: "40%",
            paddingLeft: "20px",
            paddingTop: "90px",
          }}>
          <Box>
            <Typography variant="h2" sx={{ color: "" }}>
              Creating a better <br /> IT solution.
              <br />
            </Typography>
            <Typography
              variant="body1"
              sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
              Popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Box sx={{ gap: "20px", display: "flex" }}>
              <Button
                variant=""
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "50px",
                  width: "200px",
                  border: "0.5px solid grey",
                  boxShadow: "5",
                }}>
                Contact Us
              </Button>
              <ColorButton
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px",
                  height: "50px",
                  width: "200px",
                }}>
                Request Quote
              </ColorButton>
            </Box>
          </Box>
        </Box>
        <Box sx={{ float: "right", width: "45%", padding: "50px 0px 0px 0px" }}>
          <img src={banner} alt="" height={390} width={600} />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
