import React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import MovieCard from "../MovieCard/MovieCard";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];
const True = true;

function ReUseCarousel(props) {
  let showList;
  if (props.data) {
    showList = props.data.map((data, index) => (
      <MovieCard key={index} {...data} />
    ));
  } else {
    showList = <>{props.children}</>;
  }
  return (
    <Carousel showArrows={false} focusOnSelect={false} enableSwipe={true} breakPoints={breakPoints}>
      {showList}
    </Carousel>
  );
}

export default ReUseCarousel;
