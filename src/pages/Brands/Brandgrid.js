import Grid from "@mui/material/Grid";
import Brandlist from "./Brandlist";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { fontSize, width } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

const Brandgrid = ({ name, id }) => {
  const Item = styled(Paper)(({ theme }) => ({
    borderRight: "solid 2px black",
    borderBottom: "solid 2px black",
    borderRadius: 0,
    width: "14rem",
    height: "14rem",
    fontSize: "2rem",
    fontWeight: "200",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
  }));

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Item gutterBottom variant="h5" component="div">
          {name}
        </Item>
      </Grid>
    </>
  );
};
export default Brandgrid;
