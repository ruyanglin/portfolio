import React from 'react';
import ryan from './images/ryan.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ryan} className="App-logo" alt="ryan lin"/>
        <h1>
          Hi, I'm Ryan Lin. Welcome to my portfolio! Currently still under construction.
        </h1>

        <div className="App-contact">
          <a href="https://drive.google.com/file/d/1SGVATAfiGqU2U2RXWRr4-Q-FUJ6g_LoO/view?usp=sharing"> Resume </a> 
          <a href="https://www.linkedin.com/in/ruyanglin/"> LinkedIn </a>
          <a href="https://www.instagram.com/timecrop/"> Instagram </a>
        </div>
      </header>

      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
