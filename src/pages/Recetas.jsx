import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const defaultCafe = "https://cdn.pixabay.com/photo/2015/09/02/13/14/coffee-918550_1280.jpg";

const imagenes = [
  "https://images.pexels.com/photos/4472870/pexels-photo-4472870.jpeg", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDV3SgUIXjs3Nvm_4D202w4fLCkVutQ1OJ3g&s",      
  "https://www.casaluker.com/wp-content/uploads/2023/10/receta_trufas_0.jpg",    
  "https://www.cocinadelirante.com/sites/default/files/images/2019/07/cheesecake-de-cafe-con-queso-crema-sin-horno.jpg",        
  "https://static.bainet.es/clip/209a2a71-4779-4a6d-8089-e23d4f362d10_source-aspect-ratio_1600w_0.jpg",       
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzx03t8zKgbV-OKG3mu2Jcd47G0Cfs6uk0Q&s",            
];

export default function Recetas() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/recetas")
      .then(res => {
        const formatted = res.data.map((receta, idx) => ({
          id: receta.id,
          title: receta.titulo,
          description: receta.descripcion,
          ingredients: Array.isArray(receta.ingredientes)
            ? receta.ingredientes
            : receta.ingredientes?.split(",").map(i => i.trim()) || [],
          instructions: Array.isArray(receta.pasos)
            ? receta.pasos
            : receta.pasos?.split(",").map(p => p.trim()) || [],
          image: imagenes[idx] || defaultCafe,
        }));
        setRecetas(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar recetas:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Cargando recetas...</h2>;

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Recetas Café Maka</h2>
        <p style={styles.subtitle}>Disfruta deliciosas recetas y postres con café, listas para preparar en casa.</p>

        <div style={styles.grid}>
          {recetas.map((r) => (
            <div key={r.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={r.image} alt={r.title} style={styles.image} />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.name}>{r.title}</h3>
                <p style={styles.description}>{r.description}</p>

                <h4>Ingredientes:</h4>
                <ul style={styles.list}>
                  {r.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
                </ul>

                <h4>Preparación:</h4>
                <ol style={styles.list}>
                  {r.instructions.map((p, idx) => <li key={idx}>{p}</li>)}
                </ol>

                <Link
                  to="/productos"
                  style={styles.button}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  Comprar café
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    marginTop: "80px",
    padding: "80px 20px",
    background: "linear-gradient(to bottom, #fdf6f0, #f2e6d8)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#4a3320",
    marginBottom: "10px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#8a5a3a",
    marginBottom: "60px",
    fontStyle: "italic",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    alignItems: "stretch",
  },
  card: {
    background: "#fff8f2",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "center",
  },
  imageContainer: {
    height: "260px",
    backgroundColor: "#f7f2eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    borderRadius: "15px",
    transition: "transform 0.4s ease",
  },
  cardContent: {
    padding: "25px 20px",
  },
  name: {
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#4a3320",
  },
  description: {
    fontSize: "1rem",
    color: "#7a5a40",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "15px",
    color: "#5d4037",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    textAlign: "left",
    display: "inline-block",
  },
  button: {
    display: "inline-block",
    padding: "12px 30px",
    backgroundColor: "#d4a373",
    color: "#4a3320",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    marginTop: "20px",
  },
};