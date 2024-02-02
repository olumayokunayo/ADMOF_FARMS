import React from "react";
import "./banner.css";

import image1 from "../../images/admoffarm1.jpg";
import image2 from "../../images/admoffarm2.jpg";
import image3 from "../../images/admoffarm3.jpg";
import image4 from "../../images/admoffarm4.jpg";
import image5 from "../../images/admoffarm5.jpg";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const settings = {
    autoPlay: true,
    showThumbs: false,
    infiniteLoop: true,
    showArrows: false,
    interval: 5000,
    transitionTime: 500,
    showStatus: false,
    showIndicators: false,
  };

  const slides = [
    {
      id: 1,
      src: image1,
      altText: "Slide 1",
      description: "This is the description for slide 1",
    },
    {
      id: 2,
      src: image2,
      altText: "Slide 2",
      description: "This is the description for slide 2",
    },
    {
      id: 3,
      src: image3,
      altText: "Slide 3",
      description: "This is the description for slide 3",
    },
    {
      id: 4,
      src: image4,
      altText: "Slide 4",
      description: "This is the description for slide 4",
    },
    {
      id: 5,
      src: image5,
      altText: "Slide 5",
      description: "This is the description for slide 5",
    },
  ];

  return (
    <div className="banner">
      <Carousel {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide-container">
            <img src={slide.src} alt={slide.altText} className="imageStyle" />
            <div className="overlay">
              <h1 className="hero-text">Fresh Organic Products</h1>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1.2rem",
                  fontFamily: "Poppins",
                  width: "80%",
                  margin: "auto",
                }}
              >
                We enable people to enjoy fresh products from the farm straight
                to the kitchen
              </p>
              <button className="hero-button">SHOP</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
