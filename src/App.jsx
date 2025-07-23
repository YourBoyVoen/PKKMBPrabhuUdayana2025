import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Pkkmb from './pages/informasi';
import Fakultas from './pages/fakultas';
import Informasi from './pages/informasi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pkkmb" element={<Pkkmb />} />
        <Route path="/fakultas" element={<Fakultas />} />
        <Route path="/informasi" element={<Informasi />} />
      </Routes>
    </Router>
  );
}

export default App;
