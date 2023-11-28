import React from "react";
import { Box, Button, Card, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
import explainproject from "../assets/OurService/explainproject.png";

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
  flexDirection: "column",
  width: "100%",
  margin: "20px",
  // Additional styles as needed
}));

const CloudService = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <StyleCard>
          <Box sx={{ padding: "20px", textAlign: "center" }}>
            <StyleTypography>Cloud Services and Security</StyleTypography>
            <ColorTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box
            sx={{ maxWidth: "100%", overflow: "hidden", textAlign: "center" }}>
            <img
              src={explainproject}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </StyleCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <StyleCard>
          <Box sx={{ padding: "20px", textAlign: "center" }}>
            <StyleTypography>Cloud Services and Security</StyleTypography>
            <ColorTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </ColorTypography>
            <ColorButton variant="contained">Contact Us</ColorButton>
          </Box>
          <Box
            sx={{ maxWidth: "100%", overflow: "hidden", textAlign: "center" }}>
            <img
              src={explainproject}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </StyleCard>
      </Grid>

      {/* Repeat the same pattern for other cards */}
    </Grid>
  );
};

export default CloudService;
