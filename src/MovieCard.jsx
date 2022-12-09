import React from 'react';
import styles from "./MovieCard.module.css"

const MovieCard = ({movie}) => {
    const imageUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return ( 
        <li className={styles.movieCard}>
            <img className={styles.movieImage} src={imageUrl} alt="" />
            <div>{movie.title}</div>
        </li>);
}

export default MovieCard;
