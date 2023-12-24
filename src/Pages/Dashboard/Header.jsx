import { AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      {/* <Toolbar>
        <Typography variant="h2" sx={{ marginLeft: "650px" }}>
          Dashboard
        </Typography>
        <Typography variant="subtitle1">Welcome User</Typography>
      </Toolbar> */}
      <Typography
        variant="h2"
        sx={{ textAlign: "center", height: "70px", paddingTop: "15px" }}>
        Dashboard
      </Typography>
    </AppBar>
  );
};

export default Header;
