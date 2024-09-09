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
import B2B from './pages/B2B';
import B2C from './pages/B2C';
import B2 from './pages/B2';
import Error404 from "./pages/Error404.js"




export default function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product/b2b" element={<B2B/>} />
      <Route path="/product/b2" element={<B2/>} />
      <Route path="/product/b2c" element={<B2C/>} />
      <Route path="/footer" element={<Footerr/>} />
      <Route path="/genuine" element={<Genuine/>} />
      <Route path='/*' element={<Error404.js/>}/>



    </Routes>
    
    </BrowserRouter>
  )

   
}

