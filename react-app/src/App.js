import './App.css';
import React from 'react';
import { Header } from './Components/Header';
import { RouteComonent } from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <RouteComonent />
    </div>
  );
}

export default App;
