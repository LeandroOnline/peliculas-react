import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Tu guía de streaming para películas, series de TV y deportes</h1>
      <h2>Descubre dónde ver nuevos contenidos, lo más popular y los próximos estrenos con MOVIES.</h2>
    </div>
  );
};
export default Header;
