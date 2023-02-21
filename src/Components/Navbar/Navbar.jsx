import { Link } from "react-router-dom";
import Search from "../Search/search";
import styles from "./Navbar.module.css";

const Navbar = () => {
  
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to='/'><h1 className={styles.title}>JustMovies</h1></Link>
        <Link to="/" className={styles.hide}>Home</Link>
        <Link to="/movies" className={styles.hide}>Movies</Link>
        <Search />
      </div>
    </div>
  );
};
export default Navbar;
