// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Container, Grid } from "@mui/material";
// import MainSection from "./MainSection";

// const Dashboard = () => {
//   return (
//     <Container>
//       <Grid sx={{ width: "100%" }}>
//         <Header />
//       </Grid>
//       <Grid>
//         <Grid item xs={4} sx={{ paddingTop: "50px" }}>
//           <Sidebar />
//         </Grid>
//         <Grid item xs={8}>
//           <MainSection />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;

import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {/* Header */}
      <Grid item xs={12}>
        {/* <Paper
          style={{ padding: "1em", backgroundColor: "#3498db", color: "#fff" }}>
          <Typography variant="h6">Header</Typography>
        </Paper> */}
        <Header />
      </Grid>

      {/* Sidebar */}
      <Grid item xs={2}>
        {/* <Paper
          style={{
            padding: "1em",
            backgroundColor: "#2ecc71",
            color: "#fff",
            height: "400px",
          }}>
          <Typography variant="h6">Sidebar</Typography>
        </Paper> */}
        <Sidebar />
      </Grid>

      {/* Main Section */}
      <Grid item xs={10} sx={{ marginLeft: { md: "250px", sm: "230px" } }}>
        {/* <Paper
          style={{
            padding: "1em",
            backgroundColor: "#ecf0f1",
            height: "400px",
          }}>
          <Typography variant="h6">Main Section</Typography>
        </Paper> */}
        <MainSection />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
