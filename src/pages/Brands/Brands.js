import React from "react";
import Grid from "@mui/material/Grid";
import Brandlist from "./Brandlist";
import Brandgrid from "./Brandgrid";
import { Nav, NavLink } from "react-router-dom";

const Brands = () => {
  const Brandgr = (brand) => {
    return <Brandgrid name={brand.name} />;
  };
  return (
    <>
      <div className="brand-page">
        <div className="brand-title">
          <p
            style={{
              textAlign: "start",
              fontSize: "5rem",
              marginTop: "3rem",
            }}
          >
            / &ensp; brand list.
          </p>
        </div>
        <div>
          <Grid
            container
            rowSpacing={{ xs: 4, sm: 8, md: 10 }}
            columnSpacing={{ xs: 1, sm: 2, md: 6, lg: 10 }}
          >
            {Brandlist.map(Brandgr)}
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Brands;
