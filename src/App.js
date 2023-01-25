
import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MoviesDetails/MovieDetails.jsx";
import LandingPage from "./Pages/Landing/LandingPage";
import Home from "./Pages/Home/Home";
import Watchlist from "./Pages/Watchlist/Watchlist";
import Navbar from "./Components/Navbar/Navbar";
import Popular from "./Pages/Popular/Popular";

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
            <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/popular" element={<Popular />} />
            <Route exact path="/watchlist" element={<Watchlist />} />
            <Route exact path="/movies" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
