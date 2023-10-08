import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import WellcomePage from './components/pages/WellcomePage/index.js';
import CarrerPage from './components/pages/CarrerPage';
import {ThemeContext} from './hook/context/ThemeContext';

function App() {
    return (
        <div className="App">
            <ThemeContext>
                <NavBar/>
                <WellcomePage/>
                <CarrerPage/>
            </ThemeContext>
        </div>
    );
}

export default App;
