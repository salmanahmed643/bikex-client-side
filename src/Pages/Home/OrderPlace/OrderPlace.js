import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useAuth from "../../hooks/useAuth";


const OrderPlace = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);
  const {user} = useAuth();
  const initialInfo = {customerName: user.displayName, email: user.email, Address: '', City: '', Telephone: ''}
  const [booking, setBooking] = useState(initialInfo);
  const { name, price, speeds, img } = order;
  const [orderSuccess, setOrderSuccess] = useState(false)

  useEffect(() => {
    fetch(`https://enigmatic-ridge-10373.herokuapp.com/products/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...booking}
    newInfo[field] = value;
    setBooking(newInfo)
  }


  const handleOrderPlace = e => {
    e.preventDefault();
    const orderPlace = {
      ...booking,
      bikeName: name,
      bikePrice: price
    }
    // data base
    fetch('https://enigmatic-ridge-10373.herokuapp.com/ordercomplete', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderPlace)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId) {
          setOrderSuccess(true)
        }
    })
  }

  return (
    <>
      <Box sx={{ my: 16 }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card
                  sx={{
                    minWidth: 275,
                    textAlign: "center",
                    backgroundColor: "rgba(132, 197, 69, .01)",
                    height: "100%",
                    border: "1px solid rgba(25, 118, 210, .19)",
                    borderRadius: 3,
                    boxShadow: "none",
                  }}
                >
                  <img
                    className="product_img"
                    style={{ width: "100%" }}
                    src={img}
                    alt=""
                  />
                  <CardContent sx={{ height: "20%" }}>
                    
                    <Typography variant="body2">${price}</Typography>
                    <Typography variant="body2">Speeds {speeds}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                {orderSuccess && <Alert severity="success">Order Successfully done</Alert>}
                <h1 className="mb-5"> Order Place </h1>
                  <form onSubmit={handleOrderPlace}>
                    <Typography variant="h6">{name}</Typography>
                      <TextField 
                        fullWidth 
                        defaultValue={user.displayName} 
                        type="name"
                        name="customerName"
                        onBlur={handleOnBlur}
                        placeholder="Name" /> <br />
                      <TextField 
                        fullWidth 
                        defaultValue={user.email} 
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        placeholder="email" /> <br />
                      <TextField 
                        fullWidth 
                        type="text" 
                        name="Address"
                        onBlur={handleOnBlur}
                        placeholder="Address" 
                      /> <br />
                      <TextField 
                        fullWidth 
                        type="text"
                        name="City"
                        onBlur={handleOnBlur}
                        placeholder="City" 
                        /> <br />
                      <TextField 
                        fullWidth 
                        type="tel"
                        name="Telephone"
                        onBlur={handleOnBlur}
                        placeholder="Phone Number" 
                      />
                      <Box sx={{textAlign: 'center', mt: 4}}>
                          <Button type="submit" variant="outlined"> Order Completed </Button>
                      </Box>
                  </form>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OrderPlace;
