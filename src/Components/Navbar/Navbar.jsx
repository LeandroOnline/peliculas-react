import { Link } from "react-router-dom";
import Search from "../Search/search";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to='/'><h1 className={styles.title}>JustMovies</h1></Link>
        <Link to="/">Home</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Search />
      </div>
    </div>
  );
};
export default Navbar;
