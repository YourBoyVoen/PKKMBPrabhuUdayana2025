import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Pkkmb from './pages/pkkmb';
import Fakultas from './pages/fakultas';
import FacultyDetailPage from './pages/facultyDetailPage';
import NotFound from './pages/NotFound';
import FacultyWithModal from './pages/facultyWithModal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pkkmb" element={<Pkkmb />} />
        <Route path="/Fakultas" element={<Fakultas />} />
        <Route path="/fakultas/:fakultas" element={<FacultyDetailPage />} />
        <Route path="/fakultasPakeModal" element={<FacultyWithModal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
