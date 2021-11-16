import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Review = ({ review }) => {
  const { name, description, img } = review;
  return (
    <>
      <Grid item xs={12} md={3}>
        <React.Fragment>
          <CardContent sx={{borderRadius: 7,  backgroundColor: 'rgba(248, 170, 0, .1)'}}>
            <Box className="review_info" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, p: 2, borderRadius: 7, backgroundColor: 'rgba(248, 170, 0, .13)'}}>
                <img style={{width: '50%', borderRadius: '20px', marginRight: '10px'}} src={img} alt="" />
                <Typography
                sx={{ fontSize: 16, fontWeight: 'bolder' }}
                gutterBottom>
                {name}
                </Typography>
            </Box>
            <Typography sx={{color: 'text.secondary'}} variant="body1">
             {description}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Grid>
    </>
  );
};

export default Review;