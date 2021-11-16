import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-ridge-10373.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Box sx={{ my: 16 }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
                Our Products
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {products.slice(1, 7).map((product) => (
                <Product
                  key={product._id}
                  product={product}
                ></Product>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Products;
