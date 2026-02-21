import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio";
import Recetas from "../paginas/Recetas";
import DetalleReceta from "../paginas/DetalleReceta";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/recetas" element={<Recetas />} />
      <Route path="/recetas/:id" element={<DetalleReceta />} />
    </Routes>
  );
}

export default router;