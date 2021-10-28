import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Routes from './router/router';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
