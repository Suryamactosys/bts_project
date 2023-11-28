import { Box, Button, Card, Typography } from "@mui/material";
// import StyleCard from "@mui/material/StyleCard";
import styled from "@emotion/styled";
import explainproject from "../assets/OurService/explainproject.png";
import Brainstroming from "../assets/OurService/Brainstroming.jpg";
import file from "../assets/OurService/file.jpg";
import digital from "../assets/OurService/digital.jpg";
import rivision from "../assets/OurService/rivision.png";
import complete from "../assets/OurService/complete.jpg";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#FF0000",
  color: "#FFFFFF",
  height: "40px",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#FF0000",
  },
}));

const ColorTypography = styled(Typography)(() => ({
  paddingBottom: "20px",
  fontFamily: "Courier New monospace",
  fontSize: "18px",
}));

const StyleTypography = styled(Typography)(() => ({
  fontSize: "26px",
  color: "red",
  fontFamily: "Poppins sans-serif",
}));

const StyleCard = styled(Card)(() => ({
  display: "flex",
  width: "50%",
  margin: "20px",
}));

const CloudService = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", paddingTop: "50px" }}>
        <Typography variant="h3">Our Services</Typography>
      </Box>
      <Box sx={{ display: "flex", marginLeft: "50px", marginRight: "50px" }}>
        <StyleCard>
          <Box sx={{ padding: "50px", paddingTop: "20px" }}>
            <StyleTypography>Cloud Services and Security</StyleTypography>
            <ColorTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box>
            <img src={explainproject} alt="" height={300} width={300} />
          </Box>
        </StyleCard>
        <StyleCard>
          <Box sx={{ padding: "50px", paddingTop: "10px" }}>
            <StyleTypography>UI/UX And Video Animation</StyleTypography>
            <ColorTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box>
            <img src={complete} alt="" height={300} width={300} />
          </Box>
        </StyleCard>
      </Box>
      <Box sx={{ display: "flex", marginLeft: "50px", marginRight: "50px" }}>
        <StyleCard>
          <Box sx={{ padding: "50px", paddingTop: "10px" }}>
            <StyleTypography>Software Development</StyleTypography>
            <ColorTypography>
              IExcepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box>
            <img src={digital} alt="" height={300} width={300} />
          </Box>
        </StyleCard>
        <StyleCard>
          <Box sx={{ padding: "50px", paddingTop: "10px" }}>
            <StyleTypography>Mobile Development</StyleTypography>
            <ColorTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box>
            <img src={rivision} alt="" height={300} width={300} />
          </Box>
        </StyleCard>
      </Box>
      <Box sx={{ display: "flex", marginLeft: "50px", marginRight: "50px" }}>
        <StyleCard>
          <Box sx={{ padding: "50px", paddingTop: "10px" }}>
            <StyleTypography>Digital Marketing</StyleTypography>
            <ColorTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box>
            <img src={file} alt="" height={300} width={300} />
          </Box>
        </StyleCard>
        <StyleCard>
          <Box sx={{ padding: "50px", paddingTop: "20px" }}>
            <StyleTypography>Internet Of Things</StyleTypography>
            <ColorTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box>
            <img src={Brainstroming} alt="" height={300} width={300} />
          </Box>
        </StyleCard>
      </Box>
    </Box>
  );
};

export default CloudService;
