import MoviesGrid from './components/MoviesGrid';
import styles from "./App.module.css"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={styles.header} >Movies:</h1>
      </header>
      <main>
        {/* <MoviesGrid/> */}
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/movies" element={<MoviesGrid/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
