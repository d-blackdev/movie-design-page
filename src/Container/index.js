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

class Index extends Component {
  static contextType = MovieContext;
  render() {
    const data = this.context;

    const sideNav = data.map((data, index) => {
      return <SideNav key={index} {...data} />;
    });

    return (
      <Container fluid className="main-cont">
        <Row>
          <Col md={3} className="position-relative side">
            <h6 className="categories ">Categories</h6>

                    {sideNav}
                    <SideNavFooter/>
          </Col>
          <Col md={9}>
            <Carousel />
            <MovieCollection
              data={datas}
              title="Movie Collections"
              text="All Collections"
            />
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
