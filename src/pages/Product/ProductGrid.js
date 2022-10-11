import { Carousel, Radio } from "antd";
import React, { useState } from "react";
import "./Product.scss";



const ProImage = ({ image, image2, image3 }) => {
  const [dotPosition, setDotPosition] = useState("bottom");

  return (
    <>
      <Carousel autoplay dotPosition={dotPosition} effect="fade">
        <div>
          <img className="pro-img"  src={image}></img>
        </div>
        <div>
          <img className="pro-img"  src={image2}></img>
        </div>
        <div>
          <img className="pro-img"  src={image3}></img>
        </div>
      </Carousel>
    </>
  );
};

export default ProImage;
