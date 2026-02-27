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

const styles = {
  container: { backgroundColor: "#f6f4f0", padding: "60px 20px", fontFamily: "sans-serif", minHeight: "100vh" },
  header: { textAlign: "center", marginBottom: "50px" },
  title: { color: "#4a3320", fontSize: "2.5rem", marginBottom: "10px", marginTop: 0 },
  subtitle: { color: "#8a5a3a", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" },
  card: { backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" },
  image: { width: "100%", height: "250px", objectFit: "cover", borderBottom: "4px solid #d4a373" },
  content: { padding: "25px", display: "flex", flexDirection: "column", flexGrow: 1 },
  cardTitle: { color: "#4a3320", fontSize: "1.5rem", marginTop: 0, marginBottom: "10px" },
  description: { color: "#333333", fontSize: "0.95rem", marginBottom: "20px", fontStyle: "italic" },
  sectionTitle: { color: "#8a5a3a", fontSize: "1rem", marginBottom: "8px", marginTop: "15px" },
  list: { paddingLeft: "20px", margin: 0, color: "#333333", fontSize: "0.9rem", lineHeight: 1.6 },
  button: { marginTop: "auto", width: "100%", padding: "12px", backgroundColor: "#d4a373", color: "#4a3320", border: "none", borderRadius: "8px", fontSize: "1rem", fontWeight: "bold", cursor: "pointer", display: "block", textAlign: "center" }
};

export default function Recetas() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Recetas Cafe Maka</h2>
        <p style={styles.subtitle}>Descubre las mejores formas de preparar nuestro cafe.</p>
      </div>
      <div style={styles.grid}>
        {recetasData.map((receta) => (
          <div key={receta.id} style={styles.card}>
            <img src={receta.image} alt={receta.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.cardTitle}>{receta.title}</h3>
              <p style={styles.description}>{receta.description}</p>
              <div>
                <h4 style={styles.sectionTitle}>Ingredientes:</h4>
                <ul style={styles.list}>
                  {receta.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={styles.sectionTitle}>Preparacion:</h4>
                <ol style={styles.list}>
                  {receta.instructions.map((paso, i) => <li key={i}>{paso}</li>)}
                </ol>
              </div>
              <button style={styles.button} onClick={() => window.location.href = '/productos'}>
                Comprar cafe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}