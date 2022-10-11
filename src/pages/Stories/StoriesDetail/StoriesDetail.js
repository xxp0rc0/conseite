import Grid from '@mui/material/Grid';
import './StoriesDetail.scss'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const StoriesDetail = () => {
    const params = useParams();
    const [story, setStory] = useState([]);
    useEffect(() => {
      const fetchStory = () => {
        fetch("https://63253d809075b9cbee483a4c.mockapi.io/stories/" + params.id )
          .then((response) => response.json())
          .then((data) => {
            setStory(data);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchStory();
    }, []);
    return (
      <>
              <div className="stories-detail-container">
                <div>
                  <h3 className="stories-detail-story">
                    / &ensp; {story.title}
                  </h3>
                </div>
                <div className="stories-detail-dna">
                  <h4 className="stories-detail-date">{story.date}</h4>
                  <h4 className="stories-detail-author">{story.author}</h4>
                </div>
                <img
                  className="stories-cover"
                  alt="stories-cover"
                  src={story.image}
                ></img>
                <Grid
                  container
                  justifyContent="space-between"
                  columnSpacing={10}
                  className="first-para-container"
                >
                  <Grid item md={6} lg={7} className="first-para">
                    <h3 className="first-para-headline">
                      {story.firstParaHead}
                    </h3>
                    <h3 className="first-para-content">
                      {story.firstPara}
                    </h3>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    lg={5}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <img
                      src={story.image1}
                      alt="photo1"
                      className="stories-1st-photo"
                    ></img>
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  columnSpacing={10}
                  className="second-para-container"
                >
                  <Grid xs={12} item lg={7}>
                    <img
                      src={story.image2}
                      alt="photo1"
                      className="stories-2nd-photo"
                    ></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={5}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <h3 className="second-para-content">
                      {story.secondPara}
                    </h3>
                  </Grid>
                </Grid>
                <div className="third-para">
                  <p className="third-para-content">
                    {story.thirdPara}
                  </p>
                </div>
                <Grid
                  container
                  justifyContent="space-between"
                  columnSpacing={10}
                >
                  <Grid item md={4}>
                    <img
                      src={story.image3}
                      alt="photo1"
                      className="stories-3rd-photo"
                    ></img>
                  </Grid>
                  <Grid item md={8}></Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  columnSpacing={10}
                >
                  <Grid item md={3}></Grid>
                  <Grid item md={9}>
                    <img
                      src={story.image4}
                      alt="photo1"
                      className="stories-4th-photo"
                    ></img>
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  columnSpacing={10}
                >
                  <Grid item md={4}>
                    <img
                      src={story.image5}
                      alt="photo1"
                      className="stories-3rd-photo"
                    ></img>
                  </Grid>
                  <Grid item md={8}></Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  columnSpacing={10}
                >
                  <Grid item md={3}></Grid>
                  <Grid item md={9}>
                    <img
                      src={story.image6}
                      alt="photo1"
                      className="stories-6th-photo"
                    ></img>
                  </Grid>
                </Grid>
              </div>
            </>
          );
       
        
  
   
}

export default StoriesDetail;