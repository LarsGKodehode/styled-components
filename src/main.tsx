// 3rd Parties Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// CSS
import './index.css';

// Components
import App from './App';


/**
 * DEVELOPMENT
 * clears console of error messages between hotswaps
 * @link https://github.com/vitejs/vite/discussions/3143
 */ 
 if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}
// DEVELOPMENT


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />

          <Route path='*' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);