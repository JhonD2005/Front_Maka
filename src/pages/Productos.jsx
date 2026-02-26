import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { CartContext } from "../context/CartContext";

import premium from "../assets/premium.jpeg";
import tradicional from "../assets/tradicional.jpeg";
import fermentacion from "../assets/fermentacion prolongada.jpeg";

const imagenes = {
  1: premium,
  2: tradicional,
  3: fermentacion,
};

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api.get("/productos")
      .then(res => setProductos(res.data))
      .catch(console.error);
  }, []);

  const handleAdd = (producto) => {
    addToCart(producto);
    setAddedId(producto.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1000);
  };

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Nuestros Productos</h2>

        <div style={styles.grid}>
          {productos.map((p) => (
            <div key={p.id} style={styles.card}>
              
              {/* Imagen */}
              <div style={styles.imageContainer}>
                <img
                  src={imagenes[p.id] || premium}
                  alt={p.nombre}
                  style={styles.image}
                />
              </div>

              {/* Contenido */}
              <div style={styles.cardContent}>
                <h3 style={styles.name}>{p.nombre}</h3>

                <p style={styles.description}>
                  {p.descripcion}
                </p>

                <p style={styles.price}>
                  ${p.precio}
                </p>

                <button
                  style={{
                    ...styles.button,
                    backgroundColor:
                      addedId === p.id ? "#4CAF50" : "#5d4037",
                  }}
                  onClick={() => handleAdd(p)}
                >
                  {addedId === p.id ? "✔ Agregado" : "Agregar al carrito"}
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    marginTop: "100px",
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    fontSize: "2.8rem",
    marginBottom: "60px",
    fontWeight: "700",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
  },

  card: {
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  imageContainer: {
    height: "260px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    padding: "20px",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain", // 👈 ahora no corta la imagen
  },

  cardContent: {
    padding: "25px",
    textAlign: "center",
  },

  name: {
    fontSize: "1.4rem",
    marginBottom: "10px",
    fontWeight: "600",
  },

  description: {
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "15px",
    minHeight: "60px",
  },

  price: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#5d4037",
    marginBottom: "20px",
  },

  button: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "30px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};