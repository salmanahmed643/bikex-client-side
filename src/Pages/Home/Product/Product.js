import React from "react";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name,price, speeds, img, _id } = product;
  return (
    <>
      <Grid item xs={12} md={4}>
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
            style={{ width: "100%" }}
            src={img}
            alt=""
          />
          <CardContent sx={{ height: "20%" }}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">${price}</Typography>
            <Typography variant="body2">Speeds {speeds}</Typography>
          </CardContent>
          <CardActions
            className="custom_button"
            sx={{ textAlign: "center", display: "inline-block" }}
          >
            <Link to={`/orderplace/${_id}`} style={{textDecoration: 'none'}}>
              <Button
                sx={{backgroundColor: 'rgba(25, 118, 210, 0.1)', color: '#000', px: 5, py: 1, borderRadius: 16, mb: 3 }}
                size="small"
              >
                Buy Now
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Product;
