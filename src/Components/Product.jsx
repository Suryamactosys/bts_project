import { Box, Button, Typography } from "@mui/material";
// import mobility from "../assets/Home/mobility.jpg";
// import uiux from "../assets/Home/uiux.jpg";
import Mobile from "../assets/Focus/Mobile1.png";
// import Software from "../assets/Focus/Software.png";
import Software3 from "../assets/Focus/Software3.png";
import styled from "@emotion/styled";
// import Software from "../assets/Software.jpg";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "white",
    color: "red",
  },
}));

const Product = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#FFF2EF",
        padding: "50px 0px 0px 0px",
      }}>
      <Box>
        <Typography
          // sx={{
          //   color: "red",
          //   fontSize: "32px",
          //   fontWeight: "600",
          //   fontFamily: "Poppins sans-serif",
          //   textDecoration: "underline 3px solid red",
          // }}
          variant="h3">
          Our Focus
          {/* <hr style={{ width: "150px", marginLeft: "600px", color: "red" }} /> */}
        </Typography>
        {/* <Typography>Designed and developed by AI expert like you</Typography> */}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            textAlign: "left",
            display: "flex",
            padding: "0px 0px 0px 20px",
          }}>
          <Box>
            <img src={Software3} alt="" height={400} width={350} />
          </Box>
          <Box sx={{ paddingLeft: "20px", paddingTop: "90px" }}>
            <Typography
              sx={{
                color: "red",
                fontSize: "26px",
                fontFamily: "Poppins sans-serif",
              }}>
              Software Development
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins sans-serif",
                fontSize: "18px",
                padding: "10px 0px 10px 0px",
              }}>
              Software development is the process of designing, creating,
              testing, and maintaining different software applications.
            </Typography>
            <Button>Learn More →</Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            textAlign: "left",
            display: "flex",
            padding: "200px 20px 0px 0px",
          }}>
          <Box sx={{ paddingTop: "90px" }}>
            <Typography
              sx={{
                color: "red",
                fontSize: "26px",
                fontFamily: "Poppins sans-serif",
              }}>
              Mobile Development
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins sans-serif",
                fontSize: "18px",
                padding: "10px 0px 10px 0px",
              }}>
              Mobile application development is the process of creating software
              applications that run on a mobile device, and a typical mobile
              computing resources.
            </Typography>
            <ColorButton sx={{ color: "white" }}>Learn More →</ColorButton>
            {/* <Button sx={{ color: "red" }}>Image and Video labeling →</Button>
            <br />
            <Button sx={{ color: "red" }}>Text Labeling →</Button> */}
          </Box>
          <Box sx={{ paddingLeft: "20px" }}>
            <img
              src={Mobile}
              alt=""
              height={400}
              width={380}
              style={{ backgroundColor: "#FFF2EF" }}
            />
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            textAlign: "left",
            display: "flex",
            padding: "50px 0px 0px 20px",
          }}>
          <Box>
            <img src={mobility} alt="" height={200} width={350} />
          </Box>
          <Box sx={{ paddingLeft: "20px" }}>
            <Typography sx={{ color: "red", fontSize: "26px" }}>
              Mobility development
            </Typography>
            <Typography>
              Software development is the process of designing, creating,
              testing, and maintaining different software applications.
            </Typography>
            <Button sx={{ color: "red" }}>Learn More →</Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            textAlign: "left",
            display: "flex",
            padding: "200px 20px 0px 0px",
          }}>
          <Box>
            <Typography sx={{ color: "red", fontSize: "26px" }}>
              UI/UX development
            </Typography>
            <Typography>
              Mobile application development is the process of creating software
              applications that run on a mobile device, and a typical mobile
              computing resources.
            </Typography>
            <Button sx={{ color: "red" }}>Image and Video labeling →</Button>
            <br />
            <Button sx={{ color: "red" }}>Text Labeling →</Button>
          </Box>
          <Box sx={{ paddingLeft: "20px" }}>
            <img src={uiux} alt="" height={200} width={350} />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Product;
