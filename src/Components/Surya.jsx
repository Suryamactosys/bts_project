// import { Box, Button, Typography } from "@mui/material";
// import Mobile from "../assets/Focus/Mobile1.png";
// import Software3 from "../assets/Focus/Software3.png";
// import styled from "@emotion/styled";

// import { Box, Button, Typography } from "@mui/material";

// const ColorButton = styled(Button)(() => ({
//   backgroundColor: "red",
//   "&:hover": {
//     backgroundColor: "white",
//     color: "red",
//   },
// }));

// const Product = () => {
//   return (
//     <Box
//       sx={{
//         textAlign: "center",
//         backgroundColor: "#FFF2EF",
//         padding: "50px 20px",
//       }}>
//       <Typography variant="h3">Our Focus</Typography>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//         }}>
//         <Box
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             textAlign: { xs: "center", md: "left" },
//             padding: "20px 0px",
//           }}>
//           <Box>
//             <img src={Software3} alt="" height={400} width="100%" />
//           </Box>
//           <Box sx={{ paddingTop: "20px" }}>
//             <Typography variant="h5" sx={{ color: "red" }}>
//               Software Development
//             </Typography>
//             <Typography>
//               Software development is the process of designing, creating,
//               testing, and maintaining different software applications.
//             </Typography>
//             <Button>Learn More →</Button>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             textAlign: { xs: "center", md: "left" },
//             padding: { xs: "20px 0px", md: "0px 20px" },
//           }}>
//           <Box sx={{ paddingTop: { xs: "20px", md: "0px" } }}>
//             <Typography variant="h5" sx={{ color: "red" }}>
//               Mobile Development
//             </Typography>
//             <Typography>
//               Mobile application development is the process of creating software
//               applications that run on a mobile device, and a typical mobile
//               computing resources.
//             </Typography>
//             <ColorButton sx={{ color: "white" }}>Learn More →</ColorButton>
//           </Box>
//           <Box sx={{ paddingTop: "20px" }}>
//             <img src={Mobile} alt="" height={400} width="100%" />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Product;

import { Box, Button, Typography } from "@mui/material";
import banner from "../assets/Homeimg/konveer.png";
import styled from "@emotion/styled";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "red",
  color: "white",
  borderRadius: "10px",
  height: "50px",
  width: "100%",
  "&:hover": {
    backgroundColor: "White",
    color: "red",
  },
}));

const AnotherButton = styled(Button)(() => ({
  backgroundColor: "white",
  color: "red",
  borderRadius: "10px",
  height: "50px",
  width: "100%",
  "&:hover": {
    backgroundColor: "red",
    color: "white",
  },
}));

const Surya = () => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "80px",
        flexDirection: { xs: "column", md: "row" },
      }}>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          padding: "50px",
          textAlign: "center",
        }}>
        <Typography variant="h2">
          Creating a better <br /> IT solution.
        </Typography>
        <Typography>
          Popularized in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            marginTop: "10px",
            color: "red",
            borderRadius: "10px",
            height: "50px",
            width: { xs: "50%", md: "200px" },
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}>
          Contact Us
        </Button>
        <ColorButton
          variant="contained"
          sx={{ marginTop: "10px", width: { xs: "50%", md: "200px" } }}>
          Request Quote
        </ColorButton>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: "center",
          padding: "50px",
        }}>
        <img src={banner} alt="" style={{ width: "70%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default Surya;
