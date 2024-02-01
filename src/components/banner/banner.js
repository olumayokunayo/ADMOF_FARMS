import React from "react";
import "./banner.css";

import image1 from "../../images/admoffarm1.jpg";
import image2 from "../../images/admoffarm2.jpg";
import image3 from "../../images/admoffarm3.jpg";
import image4 from "../../images/admoffarm4.jpg";
import image5 from "../../images/admoffarm5.jpg";
import image6 from "../../images/admoffarm6.jpg";
import { Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Container maxWidth="xl">
      <div className="banner">
        <div className="slider">
          <img src={image2} alt="admofimg1" id="slideImg" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
