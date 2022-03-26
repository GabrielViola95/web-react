import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ConstructivismoConceptos from './components/conceptos/ConstructivismoConceptos';
import EmocionesConcepto from './components/conceptos/EmocionesConcepto';
import Footer from './components/Footer';
import InformacionHome from './components/InformacionHome';
import Navbar from './components/Navbar';
import OSPConceptos from './components/conceptos/OSPConceptos';
import Contacto from './components/pages/Contacto';
import Foro from './components/pages/Foro';
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import SelfConcepto from './components/conceptos/SelfConcepto';
import Investigación from './components/navinfo/Investigación';
import DocumentosInfo from './components/navinfo/DocumentosInfo';
import VideosInfo from './components/navinfo/VideosInfo';
import CuriosidadesInfo from './components/navinfo/CuriosidadesInfo';
import EjemplosInfo from './components/navinfo/EjemplosInfo';
import OtrosInfo from './components/navinfo/OtrosInfo';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info/>}>
            <Route index element={<InformacionHome/>} />
            <Route path='posracionalismo' element={<InformacionHome/>} />
            <Route path='emociones' element={<EmocionesConcepto/>} />
            <Route path='self' element={<SelfConcepto/>}/>
            <Route path='osp' element={<OSPConceptos/>}/>
            <Route path='constructivismo' element={<ConstructivismoConceptos/>}/>
            <Route path='investigacion' element={<Investigación/>}>
              <Route index element={<Investigación/>} />
            </Route>
            <Route path='documentos' element={<DocumentosInfo/>}/>
            <Route path='curiosidades' element={<CuriosidadesInfo/>}/>
            <Route path='videos' element={<VideosInfo/>}/>
            <Route path='ejemplos' element={<EjemplosInfo/>}/>
            <Route path='otros' element={<OtrosInfo/>}/>
          </Route>
          <Route path='/foro' element={<Foro/>}/>
          <Route path='/login' element={<Contacto/>}/>
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
