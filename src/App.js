import { Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CruzerModels from './pages/CruzerModels';
import CruzerAttachments from './pages/CruzerAttachments';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cruzer-models" element={<CruzerModels />} />
        <Route path="/cruzer-attachments" element={<CruzerAttachments />} />
      </Routes>
    </>
  );
}

export default App;
