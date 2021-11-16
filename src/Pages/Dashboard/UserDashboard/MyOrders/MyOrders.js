import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  console.log(myOrders)

  useEffect(() => {
    const url = `https://enigmatic-ridge-10373.herokuapp.com/ordercomplete?email=${user.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setMyOrders(data));
  }, []);

  return (
    <>
      <Box>
        <Container>
            <Typography variant="h4" sx={{mb: 2}}> My orders </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="My Orders">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Bike Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {myOrders.map((row) => (
                      <TableRow
                        key={row._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.customerName}
                        </TableCell>
                        <TableCell>{row.bikeName}</TableCell>
                        <TableCell>{row.bikePrice}</TableCell>
                        <TableCell>Delete</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MyOrders;
