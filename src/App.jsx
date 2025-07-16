import { useState } from 'react'
import Home from './pages/home';
import Pkkmb from './pages/pkkmb';
import Fakultas from './pages/fakultas';
import { Routes, Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Home />
    <Pkkmb />
    <Router>
      <Routes>
        <Route path="/fakultas" component={Fakultas} />
      </Routes>
    </Router>
    </>
  );
}

export default App;