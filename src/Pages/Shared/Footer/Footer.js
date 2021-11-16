import { Container, Typography } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container sx={{my: 16}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{m: '0 auto'}}>

            <Grid item xs={12} md={4}>
              <Typography variant="h3">BikeX</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5">Customer Service</Typography>
              <Link style={{color: '#000'}} to="/">Faq</Link> <br/>
              <Link style={{color: '#000'}} to="/">About US</Link> <br/>
              <Link style={{color: '#000'}} to="/">Contact Us</Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5">Company</Typography>
              <Link style={{color: '#000'}} to="/">Company</Link> <br/>
              <Link style={{color: '#000'}} to="/">Careers</Link> <br/>
              <Link style={{color: '#000'}} to="/">Contact</Link> <br/>
              <Link style={{color: '#000'}} to="/">Blog</Link>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Footer;