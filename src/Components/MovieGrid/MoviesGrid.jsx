import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Get from "../../Utilities/get";
import Loading from "../../Utilities/loading";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const query = useQuery();
  const search = query.get("search");
  
  useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      :"/discover/movie";

    Get(searchUrl).then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, [search]);

  if (isLoading) return <Loading />;

  return (
    <div className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
