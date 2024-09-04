import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import Footer from "./components/shared/Footer";
import Header from './components/shared/Header';
import Sesction2 from "./components/Homepage/Section2"
import Sesction3 from "./components/Homepage/Section3"
import Sesction4 from './components/Homepage/Section4';
import Section5 from "./components/Homepage/Section5"
import Section6 from './components/Homepage/Section6';
import Section7 from './components/Homepage/Section7';
import Footerr from './pages/Footer';
import Genuine from "./pages/Genuine"




export default function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/section2" element={<Sesction2 />} />
      <Route path="/section3" element={<Sesction3 />} />
      <Route path="/section4" element={<Sesction4 />} />
      <Route path="/section5" element={<Section5/>} />
      <Route path="/section6" element={<Section6/>} />
      <Route path="/section7" element={<Section7/>} />
      <Route path="/footer" element={<Footerr/>} />
      <Route path="/genuine" element={<Genuine/>} />







    </Routes>
    
    </BrowserRouter>
  )

   
}

