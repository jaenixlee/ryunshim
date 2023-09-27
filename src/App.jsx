import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
import About from './components/About/About';
import Art from './components/Art/Art';
import './App.module.css';

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
