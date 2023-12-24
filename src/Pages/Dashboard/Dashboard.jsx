import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Grid>
        <Grid item xs={4} sx={{ paddingTop: "50px" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} sx={{ marginLeft: "100px" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
