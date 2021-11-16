import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import banner from '../../../images/banner001.jpg'

const Banner = () => {
  return (
    <>
      <Box sx={{ my: 16 }}>
        <Container>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: "bolder", mb: 5 }}>
                Meet your cycling needs <br /> every day
              </Typography>
              <Box>
                <NavLink style={{ textDecoration: "none" }} to="/explorebikes">
                  <Button variant="contained">Explore Bike</Button>
                </NavLink>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img style={{ width: "100%" }} src={banner} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
