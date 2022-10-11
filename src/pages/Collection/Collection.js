import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import CollectionGrid from "./CollectionGrid";
import styles from "./Collection.scss";
import Filters from "./Filter";

const Collection = () => {
  const [brDetail, setBrDetail] = useState([]);
  const [sortState, setSortState] = useState("none");
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePrice, setActivePrice] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://629da17a3dda090f3c065767.mockapi.io/cam/all ")
        .then((response) => response.json())
        .then((data) => {
          setBrDetail(data);
          setProducts(data);
          setFilters(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2.5}></Grid>
        <Grid item xs={12} md={9.5}>
          <div>
            <p className="brand-detail-title">/ &ensp; {filters.category}.</p>
            <Filters
              products={products}
              setFilters={setFilters}
              setActivePrice={setActivePrice}
              activePrice={activePrice}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          <div className="cpw">
            <Grid
              container
              spacing={2}
              rowSpacing={6}
              className="coll-pro-wrapper"
            >
              {filters.map(({ image, name, price, id }) => {
                return (
                  <CollectionGrid
                    image={image}
                    name={name}
                    price={price}
                    id={id}
                  />
                );
              })}
              {console.log(filters)}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Collection;

// {
//   brDetail.map(({ image, name, price }) => {
//     return <Branddetailgrid image={image} name={name} price={price} />;
//   });
// }
