import React from "react";
import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Collection.scss";

const CollectionGrid = ({ name, image, price, id, brand }) => {
 

  return (
    <>
      <Grid item xs={12} sm={6} lg={4} className='coll-list-wrapper'>
        <NavLink to={`/products/${id}`} style={{ color: "black" }}>
          <Card className="collection-pro-gird" >
            <CardMedia
              className="collection-image"
              component="img"
              image={image}
              alt="green iguana"
            />
          </Card>

          <CardContent>
            <Grid container columnSpacing={2} className="collection-pro-info">
              <Grid item xs={8}>
                <p className="collection-pro-name">{name}</p>
              </Grid>
              <Grid item xs={4}>
                <p className="collection-pro-price">${price}</p>
              </Grid>
            </Grid>
          </CardContent>
        </NavLink>
      </Grid>
    </>
  );
};

export default CollectionGrid;
