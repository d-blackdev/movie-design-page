import React from "react";
import "./MovieCollection.css";
import img1 from "../../assests/Images/TombRaider.jpg";
import img2 from "../../assests/Images/CaptainAmerica.jpg";
import img3 from "../../assests/Images/BlackPanther.jpg";
import img4 from "../../assests/Images/Spiderman2.jpg";
import MovieCard from "../../Component/MovieCard/MovieCard";
import PropTypes from 'prop-types'

const datas = [
  {
    img: img1,
    title: "Action",
    text: "Collection of movies that amazes",
    rate: 20,
  },
  {
    img: img2,
    title: "Fantasy",
    text: "Collection of movies that amazes",
    rate: 15,
  },
  {
    img: img3,
    title: "Romance",
    text: "Collection of movies that amazes",
    rate: 17,
  },
  {
    img: img4,
    title: "Adventure",
    text: "Collection of movies that amazes",
    rate: 19,
  },
];
function MovieCollection(props) {
  var Datalists;
  if (props.data) {
    Datalists = props.data.map((data, index) => (
      <MovieCard key={index} {...data} />
    ));
  } else {
      
      Datalists = <>{props.children}</>;
  }
  return (
    <div className="collection">
      <div className="collection-header d-flex justify-content-between">
        <h5>{props.title}</h5>
        {props.text ? <p>{props.text}</p> : null}
      </div>
      <div className="d-flex ">{Datalists}</div>
    </div>
  );
}
// MovieCollection.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.object)
// }
export default MovieCollection;
