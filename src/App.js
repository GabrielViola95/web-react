import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contacto from './components/pages/Contacto';
import Foro from './components/pages/Foro';
import Home from './components/pages/Home';
import Info from './components/pages/Info';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info/>}/>
          <Route path='/foro' element={<Foro/>}/>
          <Route path='/login' element={<Contacto/>}/>
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
