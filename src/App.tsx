// 3rd Parties

// CSS
import styles from './App.module.css';

// Assets
import logo from '/logo.svg';

// Components

function App() {
  return (
    <main className={styles['App']}>
      <img src={logo} className="logo" alt="logo" />
    </main>
  );
};

export default App;