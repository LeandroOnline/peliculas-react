import { Link } from "react-router-dom";
import styles from "./Platforms.module.css";

const Platforms = () => {
  return (
    <div className={styles.column}>
      <h1>Platforms on JustMovies</h1>
      <div className={styles.container}>
        <Link>
          <img src="https://images.justwatch.com/icon/207360008/s100" alt="" />
        </Link>
        <Link>
          <img src="https://images.justwatch.com/icon/147638351/s100" alt="" />
        </Link>
        <Link>
          <img src="https://images.justwatch.com/icon/52449861/s100" alt="" />
        </Link>
        <Link>
          <img src="https://images.justwatch.com/icon/190848813/s100" alt="" />
        </Link>
        <Link>
          <img src="https://images.justwatch.com/icon/250272035/s100" alt="" />
        </Link>
        <Link>
          <img src="https://images.justwatch.com/icon/285237061/s100" alt="" />
        </Link>
        <Link>
          <img src="https://images.justwatch.com/icon/152862153/s100" alt="" />
        </Link>
        <Link>
          <img src="https://images.justwatch.com/icon/242706661/s100" alt="" />
        </Link>
      </div>
    </div>
  );
};
export default Platforms;
