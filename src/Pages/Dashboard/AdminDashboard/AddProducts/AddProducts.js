import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { Alert } from "@mui/material";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    axios.post('https://enigmatic-ridge-10373.herokuapp.com/products', data)
    .then(res => {
      if(res.data.insertedId) {
        setReviewSuccess(true)
        reset()
      }
    })
  }
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add your Product
          </Typography>
          {reviewSuccess && <Alert severity="success">Added a Product</Alert>}
          <Grid
            container
            spacing={2}
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item>
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                  sx={{ mb: 2 }}
                  {...register("img")}
                  placeholder="Images"
                />
                <br />
                <TextField
                  sx={{ mb: 2 }}
                  {...register("name", { required: true, maxLength: 20 })}
                  placeholder="Name"
                />
                <br />
                <TextField sx={{ mb: 2 }} type="number" {...register("Price")} placeholder="Price" />
                <br />
                <TextField sx={{ mb: 2 }} type="number" {...register("Speeds")} placeholder="Speeds" />
                <br />
                <TextField style={{ cursor: "pointer" }} type="submit" />
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AddProducts;
