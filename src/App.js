import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './styles/HomePageStyles.css';
import './styles/NavStyles.css';

function App() {
  return (
    <div className="App">
      <nav> 
        <NavBar />
      </nav>
      <HomePage />
    </div>
  );
}

export default App;
