import React from 'react'
import react from '../../assets/images/react.jpeg'
import html from "../../assets/images/Html.jpeg"
import css from "../../assets/images/css.png"
import js from "../../assets/images/js.png"
import htmlCanva from "../../assets/images/htmlCanva.png"
import reactIconMain from "../../assets/images/React-icon-library.webp"
import ReactLogo from "../../assets/images/reactLogo.png"



const Hero = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1500">
            <img src={reactIconMain} className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src={htmlCanva} className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src={css} className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src={js} className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src={ReactLogo} className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
