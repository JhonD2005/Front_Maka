
import r1 from "../assets/imagen_2.jpg";
import r2 from "../assets/imagen_2.jpg";
import r3 from "../assets/imagen_2.jpg";

export default function Recetas() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Recetas</h2>
      <img src={r1} width="300" />
      <img src={r2} width="300" />
      <img src={r3} width="300" />
    </div>
  );
}