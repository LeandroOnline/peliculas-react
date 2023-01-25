import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./MovieCard.module.css"

const MovieCard = ({movie}) => {
    const imageUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return ( 
        <div className={styles.card}>
            <NavLink to={"/movies/" + movie.id}>
                <li className={styles.card2}>
                    <img className={styles.movieImage} src={imageUrl} alt="" />
                    {/* <div className={styles.name}>{movie.title}</div> */}
                </li>
            </NavLink>
        </div>
    )
}

export default MovieCard;
