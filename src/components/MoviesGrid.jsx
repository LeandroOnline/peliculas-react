import React, { useEffect, useState } from "react";
import Get from "../utilities/get";
import Loading from "../utilities/loading";
import MovieCard from "./MovieCard";
// import movies from "../movies.json";
import styles from "./MovieGrid.module.css";

const MoviesGrid = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Get("/discover/movie").then((data) => {setMovies(data.results);setLoading(false);});
  }, []);

  if(isLoading) return <Loading/>;
  
  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
