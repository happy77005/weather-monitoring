import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Weather from './Weather';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="title">Real Time Weather Monitoring</h1>
        
        <Switch>
          <Route path="/" component={Weather} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
