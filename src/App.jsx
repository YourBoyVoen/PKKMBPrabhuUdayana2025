import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Pkkmb from './pages/pkkmb';
import Fakultas from './pages/fakultas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pkkmb" element={<Pkkmb />} />
        <Route path="/fakultas" element={<Fakultas />} />
      </Routes>
    </Router>
  );
}

export default App;
