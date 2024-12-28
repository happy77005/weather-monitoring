import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Real time weather at Tarnaka</h1>
      
      <Weather />
    </div>
    
  );
}

export default App;
