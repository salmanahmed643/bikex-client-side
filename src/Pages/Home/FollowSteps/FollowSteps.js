import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import './FollowSteps.css'

const FollowSteps = () => {
  const cycle = <i className="fas fa-bicycle"></i>;
  const date = <i className="fas fa-calendar-alt"></i>;
  const pick_up = <i className="fas fa-biking"></i>;
  return (
    <>
      <Box sx={{ py: 16, backgroundColor: 'rgba(248, 170, 0, .05)' }}>
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: "bolder" }} variant="h4">
              Follow these 3 steps
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Grid item sx={12} md={4}>
              <Card sx={{ minWidth: 275, border: 'none', boxShadow: 'none', py: 5, borderRadius: 7, backgroundColor: 'rgba(248, 170, 0, .09)' }} className="follow_container">
                <CardContent>
                  <Typography variant="h5"></Typography>
                  <Typography sx={{ mb: 1.5 }}>
                    <Box sx={{ textAlign: "center" }} className="custom_style">{cycle}</Box>
                  </Typography>
                  <Typography variant="body2">
                    <Typography variant="h6">
                      <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h6">Select a bike</Typography>
                      </Box>
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sx={12} md={4}>
              <Card sx={{ minWidth: 275, border: 'none', boxShadow: 'none', py: 5, borderRadius: 7 }} className="follow_container">
                <CardContent>
                  <Typography variant="h5"></Typography>
                  <Typography sx={{ mb: 1.5 }}>
                    <Box sx={{ textAlign: "center" }} className="custom_style">{date}</Box>
                  </Typography>
                  <Typography variant="body2">
                    <Typography variant="h6">
                      <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h6">Set a Date</Typography>
                      </Box>
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sx={12} md={4}>
              <Card sx={{ minWidth: 275, border: 'none', boxShadow: 'none', py: 5, borderRadius: 7 }} className="follow_container">
                <CardContent>
                  <Typography variant="h5"></Typography>
                  <Typography sx={{ mb: 1.5 }}>
                    <Box sx={{ textAlign: "center" }} className="custom_style">{pick_up}</Box>
                  </Typography>
                  <Typography variant="body2">
                    <Typography variant="h6">
                      <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h6">Pick up the product</Typography>
                      </Box>
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FollowSteps;