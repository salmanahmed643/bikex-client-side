import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('https://enigmatic-ridge-10373.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
  return (
    <>
      <Box sx={{py: 16, backgroundColor: 'rgba(248, 170, 0, .05)'}}>
        <Container>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h4" sx={{fontWeight: 'bolder', mb: 3}}>
                    Review
                </Typography>
            </Box>
          <Grid container spacing={2}>
            {
                reviews.map(review => <Review
                    review={review}
                ></Review>)
            }
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Reviews;