import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Get from "../../Utilities/get";
import Loading from "../../Utilities/loading";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams(); //es el parametro que esta en la ruta especificada en App
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [movieId]);

  if (isLoading) return <Loading />;

  if (!movie) return null;

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className={styles.detail}>
      <img className={styles.col + " " + styles.image} src={imageUrl} alt="" />
      <div className={`${styles.col} ${styles.text}`}>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <strong>Genres: </strong>
        {movie.genres.map((genre) => genre.name).join(", ")}
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
