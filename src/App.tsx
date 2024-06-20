import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import StockFinder from "./components/StockFinder/StockFinder";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StockFinder />
      </div>
  );
}

export default App;
