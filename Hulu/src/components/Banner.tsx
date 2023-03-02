import { useState, useEffect } from "react";
// Sass
import classes from "./Banner.module.sass";
// API
import API from "../utils/API";
// Utils
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../utils/config";
// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [starCount, setStarCount] = useState([]);

  useEffect(() => {
    const fetchNewestMovie = async () => {
      const randomPage = Math.round(Math.random() * 500 + 1);
      const randomMovie = Math.round(Math.random() * 19);
      const res = await API.fetchPopularMovies(randomPage);
      setMovie(res.results[randomMovie]);
    };

    const intervalId = setInterval(() => {
      fetchNewestMovie();
    }, 10000);

    fetchNewestMovie();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (typeof movie.vote_average == "number") {
      const stars = Array.from(Array(Math.round(movie.vote_average)), (x) => x);
      setStarCount(stars);
    }
  }, [movie]);

  return (
    <div
      className={classes.heroBanner}
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie?.backdrop_path})`,
      }}
    >
      <div className={classes.container}>
        <div className={classes.header}>
          <p>SEASON PREMIERE NOW STREAMING</p>
          <div className={classes.stars}>
            {starCount?.map((_, i) => (
              <div className={classes.star} key={i}>
                *
              </div>
            ))}
          </div>
          <h2>{movie.title}</h2>
        </div>
        <div className={classes.info}>
          <div className={classes.buttons}>
            <button>
              <PlayArrowIcon /> Play
            </button>
            <button>Details</button>
            <button>
              <MoreVertIcon />
            </button>
          </div>
          <div>
            <p>{movie.release_date}</p>
            <p>FX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
