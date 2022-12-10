import React from 'react';
import MovieCard from './MovieCard';
import movies from "../movies.json";
import styles from "./MovieGrid.module.css"

const MoviesGrid = () => {
    return (
        <ul className={styles.movieGrid}>
            {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </ul>
    );
}

export default MoviesGrid;
