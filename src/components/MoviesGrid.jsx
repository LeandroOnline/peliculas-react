import React, { useEffect, useState } from "react";
import Get from "../utilities/get";
import MovieCard from "./MovieCard";
// import movies from "../movies.json";
import styles from "./MovieGrid.module.css";

const MoviesGrid = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Get("/discover/movie").then((data) => setMovies(data.results));
  }, []);

  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
