import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Works from './pages/Works/Works';
import Exhibition from './pages/Exhibition/Exhibition';
import ExhibitionDetail from './pages/ExhibitionDetail/ExhibitionDetail';

/// import CV from './pages/CV/CV';
// import About from './pages/About/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/works" element={<Works />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/exhibition/:id" element={<ExhibitionDetail />} />
        {/* <Route path="/cv" element={<CV />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
