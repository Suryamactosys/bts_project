import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/Homepage";
import { Box } from "@mui/material";
import Contact from "./Pages/Contact";
import Signup from "./Components/Signup";
import BasicModal from "./Components/RequestForm";

function App() {
  return (
    <>
      <Box position={"relative"} overflow={"hidden"}>
        <Box
          sx={{
            height: "1000px",
            width: "1154px",
            backgroundColor: "#FF7E78",
            borderRadius: "50%",
            position: "absolute",
            right: "-461px",
            top: "-857px",
          }}></Box>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/basicmodal" element={<BasicModal />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
