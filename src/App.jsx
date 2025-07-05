import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import HomePage from './components/HomePage';


import './index.css';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;



