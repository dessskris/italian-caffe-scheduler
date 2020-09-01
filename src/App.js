import React from 'react';
import Schedule from './Schedule';
import './App.css';
import { environment } from './environment';

function App() {
  return (
    <div className="App">
      <h1>{environment.title}</h1>
      <Schedule />
    </div>
  );
}

export default App;
