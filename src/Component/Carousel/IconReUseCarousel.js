import React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import MovieCard from "../MovieCard/MovieCard";
import IconNav from "../Navbar/IconNav/IconNav";

const breakPoints = [
  { width: 1, itemsToShow: 4 },
    { width: 468, itemsToShow: 2 },
  {width:700, itemsToShow:7},
  { width: 736, itemsToShow: 7 },

];
const True = true;

function ReUseCarousel(props) {
  let showList;
  if (props.data) {
    showList = props.data.map((data, index) => (
      <IconNav key={index} {...data} />
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
