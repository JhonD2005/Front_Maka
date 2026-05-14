import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Recetas from "./pages/Recetas";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";
import AcercaDe from "./pages/AcercaDe";
import ProtectedRoute from "./router/ProtectedRoute";
import WhatsAppButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }/>
      </Routes>
      <WhatsAppButton />
      <Analytics />
    </>
  );
}

export default App;
