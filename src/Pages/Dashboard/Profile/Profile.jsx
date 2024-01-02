import { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Loader from "../../../Components/Loading/Loading";

const UserProfile = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/user/fetch");
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid justifyContent="center" sx={{ margin: "0px", padding: "0px" }}>
      <Grid item xs={12} sm={10} md={8} lg={12}>
        <>
          <>
            {usersData.length > 0 ? (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Mobile</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {usersData.map((user) => (
                      <TableRow key={user._id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell>{user.address}</TableCell>
                        <TableCell>{user.city}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="body2" color="textSecondary" component="p">
                <Loader />
              </Typography>
            )}
          </>
        </>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
