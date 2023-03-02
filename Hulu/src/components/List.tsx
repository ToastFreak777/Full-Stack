import { useState, useEffect } from "react";
// Sass
import classes from "./List.module.sass";
// Utils
import API from "../utils/API";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../utils/config";
// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  updateMaxImages,
  updateNowPlaying,
  updatePopular,
  updateTopRated,
  updateOffset,
} from "../context/movieSlice";
// Redux

const List = () => {
  const { moviesList } = useSelector((state) => state.movies);
  const { maxImages } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const nowPlayingMovies = await API.fetchNowPlayingMovies(1);
        const popularMovies = await API.fetchPopularMovies(1);
        const topRatedMovies = await API.fetchTopRatedMovies(1);

        dispatch(updateNowPlaying(nowPlayingMovies));
        dispatch(updatePopular(popularMovies));
        dispatch(updateTopRated(topRatedMovies));
      } catch (err) {
        console.log(err);
      }
    };

    getMovieData();
    dispatch(
      updateMaxImages(
        Math.floor(window.innerWidth / Number(POSTER_SIZE.slice(1)))
      )
    );
  }, []);

  const handleClick = (e, decrease = false) => {
    const field = e.target.getAttribute("name");
    decrease
      ? dispatch(updateOffset({ value: -1, field }))
      : dispatch(updateOffset({ value: 1, field }));
  };

  return (
    <div className={classes.list}>
      <div className={classes.container}>
        <h2 className={classes.title}>Now Playing</h2>
        <div className={classes.poster}>
          {moviesList.nowPlaying.results?.map((movie) => (
            <img
              key={movie.id}
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
              alt={movie.title}
              style={{
                transform: `translateX(-${
                  Number(POSTER_SIZE.slice(1)) *
                  maxImages *
                  moviesList.nowPlaying.offset
                }px)`,
              }}
            />
          ))}
        </div>
        {moviesList.nowPlaying.count > maxImages && (
          <button className={classes.left}>
            <ArrowBackIosNewIcon
              name="nowPlaying"
              onClick={(e) => {
                handleClick(e, true);
              }}
            />
          </button>
        )}
        {moviesList.nowPlaying.count <=
          moviesList.nowPlaying.results.length && (
          <button className={classes.right}>
            <ArrowForwardIosIcon name="nowPlaying" onClick={handleClick} />
          </button>
        )}
      </div>
      <div className={classes.container}>
        <h2 className={classes.title}>Popular</h2>
        <div className={classes.poster}>
          {moviesList.popular.results?.map((movie) => (
            <img
              key={movie.id}
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
              alt={movie.title}
              style={{
                transform: `translateX(-${
                  Number(POSTER_SIZE.slice(1)) *
                  maxImages *
                  moviesList.popular.offset
                }px)`,
              }}
            />
          ))}
          {moviesList.popular.count > maxImages && (
            <button className={classes.left}>
              <ArrowBackIosNewIcon
                name="popular"
                onClick={(e) => {
                  handleClick(e, true);
                }}
              />
            </button>
          )}
          {moviesList.popular.count <= moviesList.popular.results.length && (
            <button className={classes.right}>
              <ArrowForwardIosIcon name="popular" onClick={handleClick} />
            </button>
          )}
        </div>
      </div>
      <div className={classes.container}>
        <h2 className={classes.title}>Top Rated</h2>
        <div className={classes.poster}>
          {moviesList.topRated.results?.map((movie) => (
            <img
              key={movie.id}
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`}
              alt={movie.title}
              style={{
                transform: `translateX(-${
                  Number(POSTER_SIZE.slice(1)) *
                  maxImages *
                  moviesList.topRated.offset
                }px)`,
              }}
            />
          ))}
          {moviesList.topRated.count > maxImages && (
            <button className={classes.left}>
              <ArrowBackIosNewIcon
                name="topRated"
                onClick={(e) => {
                  handleClick(e, true);
                }}
              />
            </button>
          )}
          {moviesList.topRated.count <= moviesList.topRated.results.length && (
            <button className={classes.right}>
              <ArrowForwardIosIcon name="topRated" onClick={handleClick} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
