import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Index.css";
import { MovieContext } from "../Context/Contex";
import SideNav from "../Component/Navbar/SideNav/SideNav";
import Carousel from "../Component/Carousel/Carousel";
import MovieCard from "../Component/MovieCard/MovieCard";
import MovieCollection from "./MovieCollection/MovieCollection";
import { datas, datas2 } from "./MovieCollection/Data";
import ReUseCarousel from "../Component/Carousel/ReUseCarousel";
import SideNavFooter from "../Component/Navbar/SideNav/SideNavFooter";
import MediaQuery from 'react-responsive'
import IconNav from "../Component/Navbar/IconNav/IconNav";
import IconReUseCarousel from '../Component/Carousel/IconReUseCarousel'

class Index extends Component {
  static contextType = MovieContext;
  render() {
    const data = this.context;

    const sideNav = data.map((data, index) => {
      return <SideNav key={index} {...data} />;
    });
    const horiNav = data.map((data, index) => {
      return <IconNav key={index} {...data}/>
    })

    return (
      <Container fluid className="main-cont">
        <Row className="row">
          <MediaQuery minDeviceWidth={990}>
          <Col md={3} className="position-relative side">
            <h6 className="categories ">Categories</h6>

            {sideNav}
            <SideNavFooter />
            </Col>
          </MediaQuery>
 
          <Col md={12} lg={9} className="side2">
            <Carousel className="carousel" />
            {/* Horizontal Icon */}
            <MediaQuery minDeviceWidth={738}>
            <div className="hori-cat">
              <h6 className="hori-title">Tv-Channels</h6>
              <div className="hori-flex">
                {horiNav}
                </div>
              </div>
              </MediaQuery>
            {/* Horizontal Icon for screen <= 560px */}
            <MediaQuery maxDeviceWidth={736}>
            <h6 className="hori-title">Tv-Channels</h6>

            <div className="hori-cat2">
              <IconReUseCarousel data={data}/>


              </div>
              </MediaQuery>
           
      
            <MovieCollection title="Movie Collections"
              text="All Collections">
              <ReUseCarousel data={datas} />
            </MovieCollection>
            <MovieCollection title="New">
              <ReUseCarousel data={datas2} />
            </MovieCollection>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index;
