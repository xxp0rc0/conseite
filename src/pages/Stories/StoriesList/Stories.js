import {useState, useEffect, React} from "react";
import './Stories.scss';
import StoriesGrid from "./StoriesGrid";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";



const Stories = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
      const fetchStories = () => {
        fetch("https://63253d809075b9cbee483a4c.mockapi.io/stories")
          .then((response) => response.json())
          .then((data) => {
            setBlog(data);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchStories();
    }, []);
    return (
      <div className="stories-container">
        <Grid>
          <Grid item>
            <h3 className="stories-fa">/ &ensp; stories.</h3>
          </Grid>
          <Grid item>
            <img
              className="stories-cover"
              alt="stories-cover"
              src="https://assets.community.lomography.com/ec/032723df606cbd6e2c8a66d8ee7ac4de7d88b2/1000x667x1.jpg?auth=ae4be552a431f91683905de349043fd2156db863"
            ></img>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          
        >

          
            {blog.map(({ image, title, desc, id }) => {
              return (
                <>
                  <NavLink style={{ textDecoration: 'none'}} to={`/stories/${id}`}>
                    <Grid item md={4}>
                      <img
                        className="stories-image"
                        src={image}
                        alt={title}
                      ></img>
                      <h4 className="stories-title">{title}</h4>
                      <p className="stories-desc">{desc}</p>
                    </Grid>
                  </NavLink>
                </>
              );
            })}
            
           
        </Grid>
      </div>
    );
}

export default Stories;