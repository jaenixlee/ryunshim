import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
import About from './components/About/About';
import Art from './components/Art/Art';
import Pili from './components/Pili/Pili';
import Mindfulness from './components/Mindfulness/Mindfulness';
import Merlin from './components/Merlin/Merlin';
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
          <Route path="/pili" element={<Pili />} />
          <Route path="/mindfulness-magic-machines" element={<Mindfulness />} />
          <Route path="/merlin-bird-id" element={<Merlin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
