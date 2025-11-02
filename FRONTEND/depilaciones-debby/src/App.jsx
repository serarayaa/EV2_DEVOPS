import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Reserva from "./pages/Reserva";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import "./styles.css";

export default function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/reserva" element={<Reserva/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <Footer />
    </>
  );
}
