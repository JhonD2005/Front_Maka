import React from "react";
import r1 from "../assets/imagen_2.jpg";
import r2 from "../assets/imagen_2.jpg";
import r3 from "../assets/imagen_2.jpg";

const recetasData = [
  {
    id: 1,
    title: "Prensa Francesa",
    image: r1,
    description: "Metodo clasico para una taza intensa.",
    ingredients: ["15g de Cafe Maka", "250ml de agua caliente"],
    instructions: ["Agrega el cafe", "Vierte el agua", "Espera 4 minutos", "Baja el embolo y sirve"]
  },
  {
    id: 2,
    title: "Filtrado (V60)",
    image: r2,
    description: "Resalta notas afrutadas y acidez brillante.",
    ingredients: ["15g de Cafe Maka", "250ml de agua caliente", "Filtro de papel"],
    instructions: ["Purga el filtro", "Haz pre-infusion de 30s", "Vierte el resto del agua", "Sirve"]
  },
  {
    id: 3,
    title: "Cold Brew",
    image: r3,
    description: "Extraccion en frio, refrescante y dulce.",
    ingredients: ["50g de Cafe Maka", "500ml de agua al clima"],
    instructions: ["Mezcla el cafe y agua", "Refrigera 12 a 24 horas", "Filtra la mezcla", "Sirve con hielo"]
  }
];

export default function Recetas() {
  return (
    <div>
      <div>
        <h2>Recetas Cafe Maka</h2>
        <p>Descubre las mejores formas de preparar nuestro cafe.</p>
      </div>
      <div>
        {recetasData.map((receta) => (
          <div key={receta.id}>
            <img src={receta.image} alt={receta.title} width="300" />
            <div>
              <h3>{receta.title}</h3>
              <p>{receta.description}</p>
              <div>
                <h4>Ingredientes:</h4>
                <ul>
                  {receta.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              </div>
              <div>
                <h4>Preparacion:</h4>
                <ol>
                  {receta.instructions.map((paso, i) => <li key={i}>{paso}</li>)}
                </ol>
              </div>
              <button onClick={() => window.location.href = '/productos'}>
                Comprar cafe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}