import Home from "../Components/Home";
import Product from "../Components/Product";
import { Box } from "@mui/material";
import Test from "../Components/Test";
import Footer from "../Components/Footer";
import CloudService from "../Components/CloudService";
import Process from "../Components/Process";
// import Services from "../Components/Services";
import Surya from "../Components/Surya";
import { AuthProvider } from "../Components/AuthContext";
import Demo from "../Components/Demo";

const HomePage = () => {
  return (
    <>
      <Box>
        <Home />
      </Box>
      {/* <AuthProvider>
        <Surya />
      </AuthProvider> */}
      <Box>
        <Product />
      </Box>
      {/* <Box>
        <Demo />
      </Box> */}
      {/* <Box>
        <Services />
      </Box> */}
      <Box>
        <CloudService />
      </Box>
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
