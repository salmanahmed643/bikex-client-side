import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Card, Typography } from "@mui/material";

const ManageProducts = () => {
  const [manages, setManages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/products`)
      .then((res) => res.json())
      .then((data) => setManages(data));
  }, []);

  // delete product
  const handleDelete = id => {
      const proceed = window.confirm("Are you sure, you want to delete this bike")
      if(proceed) {
        const url = `http://localhost:7000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert('deleted')
                const remaining = manages.filter(manage => manage._id !== id);
                setManages(remaining)
            }
        })
      }
  }
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{textAlign: 'center', mb: 2}}>
              <Typography variant="h5"> Manage Your Products </Typography>
            </Box>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {manages.map((manage) => (
                <Grid item sm={12} md={6} lg={4}>
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
                    <img src={manage.img} alt="" />
                    <Typography variant="h6"> {manage.name} </Typography>
                    <Box sx={{ textAlign: "center", p: 2 }}>
                      <Button
                        onClick={() => handleDelete(manage._id)}
                        variant="outlined"
                      >
                        Delete
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ManageProducts;
