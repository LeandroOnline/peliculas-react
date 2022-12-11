// import MoviesGrid from './components/MoviesGrid';
import styles from "./App.module.css"
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>

      <main>
        <BrowserRouter>
            <NavLink to="/"><h1 className={styles.header}>Movies</h1></NavLink>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      </main>

    </div>
  );
}

export default App;
