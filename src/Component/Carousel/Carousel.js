import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img from "../../assests/Images/Spiderman.jpg";
import img2 from "../../assests/Images/Aquaman.jpg"
import img3 from "../../assests/Images/Hellboy.jpg"
import img4 from "../../assests/Images/Godzilla.jpg"
import "./Carousel.css";
import { FaPlayCircle, FaStar } from "react-icons/fa";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel-img"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-content">
          <div className="carousel-link">
            <h6>Action</h6>
            <h6>Adventure</h6>
            <h6>Drama</h6>
            <h6 className="no">Romance</h6>
          </div>
          <h3 className="carousel-title">Interstellar</h3>
          <div className="carousel-icons-cont">
            <div className="single-icon">
              <FaPlayCircle className="carousel-icon" />
              <h6>Watch Trailer</h6>
            </div>
            <div className="single-icon">
              <FaStar className="carousel-icon"/>
              <h6>Add to Favourites</h6>
            </div>
          </div>
          <p className="carousel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </Carousel.Caption>
          </Carousel.Item>
          {/* Single Carousel */}
          <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-content">
          <div className="carousel-link">
            <h6>Action</h6>
            <h6>Adventure</h6>
            <h6>Drama</h6>
            <h6 className="no">Romance</h6>
          </div>
          <h3 className="carousel-title">Interstellar</h3>
          <div className="carousel-icons-cont">
            <div className="single-icon">
              <FaPlayCircle className="carousel-icon" />
              <h6>Watch Trailer</h6>
            </div>
            <div className="single-icon">
              <FaStar className="carousel-icon"/>
              <h6>Add to Favourites</h6>
            </div>
          </div>
          <p className="carousel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
          {/* Single Carousel */}
          <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-content">
          <div className="carousel-link">
            <h6>Action</h6>
            <h6>Adventure</h6>
            <h6>Drama</h6>
            <h6 className="no">Romance</h6>
          </div>
          <h3 className="carousel-title">Interstellar</h3>
          <div className="carousel-icons-cont">
            <div className="single-icon">
              <FaPlayCircle className="carousel-icon" />
              <h6>Watch Trailer</h6>
            </div>
            <div className="single-icon">
              <FaStar className="carousel-icon"/>
              <h6>Add to Favourites</h6>
            </div>
          </div>
          <p className="carousel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
          {/* Single Carousel */}
          <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel-img"
          src={img4}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-content">
          <div className="carousel-link">
            <h6>Action</h6>
            <h6>Adventure</h6>
            <h6>Drama</h6>
            <h6 className="no">Romance</h6>
          </div>
          <h3 className="carousel-title">Interstellar</h3>
          <div className="carousel-icons-cont">
            <div className="single-icon">
              <FaPlayCircle className="carousel-icon" />
              <h6>Watch Trailer</h6>
            </div>
            <div className="single-icon">
              <FaStar className="carousel-icon"/>
              <h6>Add to Favourites</h6>
            </div>
          </div>
          <p className="carousel-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
