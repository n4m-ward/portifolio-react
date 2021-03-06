import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import WellcomePage from './components/pages/WellcomePage/index.js';
import { ThemeContext } from './hook/context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <NavBar />
        <WellcomePage />
      </ThemeContext>
    </div>
  );
}

export default App;
