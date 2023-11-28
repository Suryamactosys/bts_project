import Home from "../Components/Home";
import Product from "../Components/Product";
import { Box } from "@mui/material";
import Test from "../Components/Test";
// import Services from "../Components/Services";
import Footer from "../Components/Footer";
import CloudService from "../Components/CloudService";
import Process from "../Components/Process";
import Demo from "../Components/Demo";
// import Services from "../Components/Services";
import Surya from "../Components/Surya";

const HomePage = () => {
  return (
    <>
      <Box>
        <Home />
      </Box>
      {/* <Box>
        <Surya />
      </Box> */}
      <Box sx={{ backgroundColor: "", paddingTop: "450px" }}>
        <Product />
      </Box>
      {/* <Box>
        <Services />
      </Box> */}
      <Box>
        <CloudService />
      </Box>
      {/* <Box>
        <Demo />
      </Box> */}
      <Box>
        <Process />
      </Box>
      <Box>
        <Test />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
