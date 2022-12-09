import MoviesGrid from './MoviesGrid';
import styles from "./App.module.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={styles.header} >Movies:</h1>
      </header>
      <main>
        <MoviesGrid/>
      </main>
    </div>
  );
}

export default App;
