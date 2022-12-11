import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./MovieCard.module.css"

const MovieCard = ({movie}) => {
    const imageUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return ( 
        <NavLink to={"/movies/" + movie.id}>
            <li className={styles.movieCard}>
                <img className={styles.movieImage} src={imageUrl} alt="" />
                <div>{movie.title}</div>
            </li>
        </NavLink>
    )
}

export default MovieCard;
