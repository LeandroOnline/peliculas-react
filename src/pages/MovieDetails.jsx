import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Get from '../utilities/get';
// import movie from "../movies copy.json";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
    
    const {movieId} = useParams(); //es el parametro que esta en la ruta especificada en App
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
       Get("/movie/" + movieId).then(data=>setMovie(data));
    }, [movieId]);

    if(!movie) return null;

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
