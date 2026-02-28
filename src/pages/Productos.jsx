import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

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
    }, 1500);
  };

  return (
    <>
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>Nuestros Cafés</h2>
          <p style={styles.subtitle}>
            Café de origen cultivado en las montañas de Andes, Antioquia. Tradición, calidad y pasión en cada grano.
          </p>

          <div style={styles.grid}>
            {productos.map((p) => (
              <div key={p.id} style={styles.card}>

                <div style={styles.imageContainer}>
                  <img
                    src={imagenes[p.id] || premium}
                    alt={p.nombre}
                    style={styles.image}
                  />
                </div>

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
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div>
            <h3 style={{ marginBottom: 10 }}>Maka Café</h3>
            <p>Café artesanal colombiano de especialidad.</p>
          </div>

          <div>
            <h4>Explorar</h4>
            <p><Link to="/" style={styles.footerLink}>Inicio</Link></p>
            <p><Link to="/productos" style={styles.footerLink}>Productos</Link></p>
            <p><Link to="/recetas" style={styles.footerLink}>Recetas</Link></p>
          </div>

          <div>
            <h4>Contacto</h4>
            <p>📍 Andes, Antioquia, Colombia</p>
            <p>📧 cafemaka2@gmail.com</p>
            <p>📞 +57 320 5971279</p>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © {new Date().getFullYear()} Maka Café — Todos los derechos reservados
        </div>
      </footer>
    </>
  );
}

const styles = {

  section: {
    marginTop: "100px",
    padding: "100px 20px",
    background: "linear-gradient(to bottom, #f5f1ed, #ede0d4)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "15px",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "60px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "50px",
  },

  card: {
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    overflow: "hidden",
    transition: "all 0.4s ease",
  },

  imageContainer: {
    height: "260px",
    backgroundColor: "#fafafa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    transition: "transform 0.4s ease",
  },

  cardContent: {
    padding: "30px",
    textAlign: "center",
  },

  name: {
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "12px",
  },

  description: {
    fontSize: "0.95rem",
    color: "#777",
    marginBottom: "15px",
    minHeight: "60px",
  },

  price: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#5d4037",
    marginBottom: "20px",
  },

  button: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "30px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  footer: {
    background: "#2c1e1a",
    color: "white",
    padding: "70px 20px 20px",
  },

  footerContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 40,
    maxWidth: 1200,
    margin: "0 auto",
  },

  footerLink: {
    color: "#d7a86e",
    textDecoration: "none",
  },

  footerBottom: {
    textAlign: "center",
    marginTop: 50,
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: 20,
    fontSize: 14,
  },
};