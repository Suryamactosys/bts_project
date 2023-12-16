import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "./Components/Header";
import HomePage from "./Pages/Homepage";
import Company from "./Pages/Company/Company";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import Loader from "./Components/Loading/Loading";
import Error from "./Pages/ErrorPage/Error";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
            <Route path="/company" element={<Company />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Routes>
        </Box>
      )}
    </>
  );
}

export default App;
