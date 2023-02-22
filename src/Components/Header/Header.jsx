import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Your streaming guide for movies, TV series and sports</h1>
      <h2>
        Discover where to see new content, the most popular and the next
        releases with JustMovies.
      </h2>
      <Link to="/movies">
        <button>Discover the movies</button>
      </Link>
    </div>
  );
};
export default Header;
