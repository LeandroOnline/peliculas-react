import React from 'react';
import movie from "../movies copy.json";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
    const imageUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div className={styles.detail}>
            <img  className={styles.col +" "+styles.image} src={imageUrl} alt="" />
            <div className={`${styles.col} ${styles.text}`}>
                <p><strong>Title: </strong>{movie.title}</p>
                <p><strong>Description: </strong>{movie.overview}</p>
                <strong>Genres: </strong>{movie.genres.map(genre=>genre.name ).join(", ")}
            </div>
        </div>
    );
}

export default MovieDetails;
