import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import News from './pages/News';
import Career from './pages/Career';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kumarn" element={<Games />} />
        <Route path="/news" element={<News />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy-policy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/cookie-policy" element={<LegalPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
