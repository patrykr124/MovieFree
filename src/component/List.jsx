
import "./List.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  PlayCircleOutline,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { useState } from "react";

function List({ title, movieList, id }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = (movieId) => {
    setShowDescription(movieId);
  };

  const handleMouseLeave = () => {
    setShowDescription(null);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="list" id={id}>
      <div className="container">
        <h2 className="list_title">{title}</h2>
        <div className="box">
          <Carousel 
            customRightArrow={
              <ArrowForwardIos
                className="arrowCarIcon right"
                style={{ fontSize: "95px", right: "0px" }}
                rtl="false"

              />
            }
            customLeftArrow={
              <ArrowBackIos
                className="arrowCarIcon left"
                style={{ fontSize: "95px", left: "0px" }}
                rtl="false"

              />
            }
            responsive={responsive}
            swipeable={true}
            draggable={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
          >
            {movieList.map((movie) => (
              <div
                key={movie.id}
                className="img_api"
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="imgs"
                  key={movie.id}
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                {showDescription === movie.id && (
                  <div className="description">
                    <h3 className="poster_title">{movie.original_title}</h3>
                    <p>{movie.overview}</p>
                    <PlayCircleOutline className="iconArrow"></PlayCircleOutline>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default List;
