import { useEffect, useState, useContext } from "react";
//import api from "../services/api";
//import { CartContext } from "../context/CartContext";
import img from "../assets/product.jpg";

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

    // quitar efecto después de 600ms
    setTimeout(() => {
      setAddedId(null);
    }, 600);
  };

  return (
    <div style={{ marginTop: "100px", padding: "40px 20px" }}>
      
      <div style={styles.container}>
        <h2 style={styles.title}>Nuestros Productos</h2>

        <div style={styles.grid}>
          {productos.map(p => (
            <div 
              key={p.id}
              style={{
                ...styles.card,
                transform: addedId === p.id ? "scale(0.95)" : "scale(1)",
              }}
              onClick={() => handleAdd(p)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img src={img} alt={p.nombre} style={styles.image} />

              <div style={styles.cardContent}>
                <h3 style={styles.name}>{p.nombre}</h3>
                <p style={styles.price}>${p.precio}</p>

                {addedId === p.id && (
                  <p style={styles.addedText}>✔ Agregado</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
  },

  card: {
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },

  cardContent: {
    padding: "20px",
    textAlign: "center",
  },

  name: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },

  price: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#5d4037",
  },

  addedText: {
    marginTop: "10px",
    color: "green",
    fontWeight: "600",
  },
};