import { useState, useContext, useEffect } from "react";
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

const productosMock = [
  {
    id: 1,
    nombre: "Café Premium",
    descripcion:
      "Perfil elegante con notas dulces de chocolate y panela.",
    precio: 25000,
    gramos: "500g",
    origen: "Andes, Antioquia",
    tueste: "Medio oscuro",
    notas: "Chocolate · Panela · Caramelo",
    detalle:
      "Ideal para espresso y bebidas intensas con cuerpo cremoso.",
  },

  {
    id: 2,
    nombre: "Café Tradicional",
    descripcion:
      "Sabor clásico colombiano, balanceado y aromático.",
    precio: 18000,
    gramos: "500g",
    origen: "Antioquia",
    tueste: "Medio",
    notas: "Avellana · Cacao · Dulce",
    detalle:
      "Perfecto para el día a día con un aroma suave y tradicional.",
  },

  {
    id: 3,
    nombre: "Fermentación Prolongada",
    descripcion:
      "Perfil exótico con acidez brillante y notas frutales.",
    precio: 32000,
    gramos: "500g",
    origen: "Andes, Antioquia",
    tueste: "Claro",
    notas: "Frutal · Tropical · Vino",
    detalle:
      "Experiencia compleja y moderna para amantes del café especial.",
  },
];

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [addedId, setAddedId] = useState(null);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setProductos(productosMock);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
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
        <div style={styles.overlay}></div>

        <div style={styles.container}>
          <div style={styles.heading}>
            <span style={styles.badge}>
              Café Colombiano Especial
            </span>

            <h2 style={styles.title}>
              Nuestros Cafés
            </h2>

            <p style={styles.subtitle}>
              Cultivado artesanalmente en las montañas
              de Antioquia. Calidad, aroma y tradición
              en cada taza.
            </p>
          </div>

          <div style={styles.grid}>
            {productos.map((p) => (

              isMobile ? (

                <div
                  key={p.id}
                  style={styles.mobileCard}
                >

                  <div style={styles.mobileImageBox}>
                    <div style={styles.mobileGlow}></div>

                    <img
                      src={imagenes[p.id]}
                      alt={p.nombre}
                      style={styles.mobileImage}
                    />
                  </div>

                  <div style={styles.mobileContent}>

                    <span style={styles.tag}>
                      Café Colombiano
                    </span>

                    <h3 style={styles.mobileTitle}>
                      {p.nombre}
                    </h3>

                    <p style={styles.mobileDescription}>
                      {p.descripcion}
                    </p>

                    <div style={styles.mobileInfo}>

                      <div style={styles.infoItem}>
                        <span style={styles.infoLabel}>
                          Origen
                        </span>

                        <span style={styles.infoValue}>
                          {p.origen}
                        </span>
                      </div>

                      <div style={styles.infoItem}>
                        <span style={styles.infoLabel}>
                          Tueste
                        </span>

                        <span style={styles.infoValue}>
                          {p.tueste}
                        </span>
                      </div>

                      <div style={styles.infoItem}>
                        <span style={styles.infoLabel}>
                          Notas
                        </span>

                        <span style={styles.infoValue}>
                          {p.notas}
                        </span>
                      </div>

                    </div>

                    <div style={styles.mobileBottom}>

                      <div>
                        <div style={styles.mobilePrice}>
                          ${p.precio}
                        </div>

                        <div style={styles.mobileWeight}>
                          {p.gramos}
                        </div>
                      </div>

                      <button
                        style={{
                          ...styles.mobileButton,
                          background:
                            addedId === p.id
                              ? "#4CAF50"
                              : "#6f4e37",
                        }}
                        onClick={() => handleAdd(p)}
                      >
                        {addedId === p.id
                          ? "✔"
                          : "Agregar"}
                      </button>

                    </div>
                  </div>
                </div>

              ) : (

                <div
                  key={p.id}
                  style={styles.flipCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.firstChild.style.transform =
                      "rotateY(180deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.firstChild.style.transform =
                      "rotateY(0deg)";
                  }}
                >
                  <div style={styles.flipInner}>

                    {/* FRONT */}
                    <div style={styles.front}>

                      <div style={styles.imageWrapper}>
                        <div style={styles.imageGlow}></div>

                        <img
                          src={imagenes[p.id]}
                          alt={p.nombre}
                          style={styles.image}
                        />
                      </div>

                      <div style={styles.content}>

                        <span style={styles.tag}>
                          Café Colombiano
                        </span>

                        <h3 style={styles.name}>
                          {p.nombre}
                        </h3>

                        <p style={styles.description}>
                          {p.descripcion}
                        </p>

                        <div style={styles.footerCard}>

                          <span style={styles.price}>
                            ${p.precio}
                          </span>

                          <span style={styles.weight}>
                            {p.gramos}
                          </span>

                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div style={styles.back}>

                      <div>
                        <h3 style={styles.backTitle}>
                          {p.nombre}
                        </h3>

                        <p style={styles.backText}>
                          <strong>Origen:</strong> {p.origen}
                        </p>

                        <p style={styles.backText}>
                          <strong>Tueste:</strong> {p.tueste}
                        </p>

                        <p style={styles.backText}>
                          <strong>Notas:</strong> {p.notas}
                        </p>

                        <p style={styles.backText}>
                          <strong>Presentación:</strong> {p.gramos}
                        </p>

                        <p style={styles.backDescription}>
                          {p.detalle}
                        </p>
                      </div>

                      <button
                        style={{
                          ...styles.button,
                          background:
                            addedId === p.id
                              ? "#4CAF50"
                              : "#6f4e37",
                        }}
                        onClick={() => handleAdd(p)}
                      >
                        {addedId === p.id
                          ? "✔ Agregado"
                          : "Agregar"}
                      </button>
                    </div>

                  </div>
                </div>

              )

            ))}
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>

          <div>
            <h3 style={{ marginBottom: 10 }}>
              Maka Café
            </h3>

            <p>
              Café artesanal colombiano de especialidad.
            </p>
          </div>

          <div>
            <h4>Explorar</h4>

            <p>
              <Link to="/" style={styles.footerLink}>
                Inicio
              </Link>
            </p>

            <p>
              <Link
                to="/productos"
                style={styles.footerLink}
              >
                Productos
              </Link>
            </p>

            <p>
              <Link
                to="/recetas"
                style={styles.footerLink}
              >
                Recetas
              </Link>
            </p>
          </div>

          <div>
            <h4>Contacto</h4>

            <p>📍 Andes, Antioquia, Colombia</p>
            <p>📧 cafemaka2@gmail.com</p>
            <p>📞 +57 320 5971279</p>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © {new Date().getFullYear()} Maka Café —
          Todos los derechos reservados
        </div>
      </footer>
    </>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "120px 20px",
    background: "#f6f1ea",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top left, rgba(111,78,55,0.06), transparent 30%), radial-gradient(circle at bottom right, rgba(215,168,110,0.08), transparent 30%)",
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1300px",
    margin: "0 auto",
  },

  heading: {
    textAlign: "center",
    marginBottom: "70px",
  },

  badge: {
    background: "#eadccf",
    color: "#6f4e37",
    padding: "10px 18px",
    borderRadius: "40px",
    fontWeight: "600",
    fontSize: "0.85rem",
  },

  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    color: "#2c1e1a",
    marginTop: "25px",
    fontWeight: "800",
  },

  subtitle: {
    maxWidth: "650px",
    margin: "20px auto 0",
    color: "#6d6d6d",
    lineHeight: "1.8",
    fontSize: "1rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "35px",
  },

  flipCard: {
    height: "500px",
    perspective: "1500px",
  },

  flipInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.8s ease",
    transformStyle: "preserve-3d",
  },

  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "30px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
  },

  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    borderRadius: "30px",
    padding: "35px",
    background:
      "linear-gradient(145deg,#4e342e,#2c1e1a)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
  },

  imageWrapper: {
    position: "relative",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px",
  },

  imageGlow: {
    position: "absolute",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(215,168,110,0.25)",
    filter: "blur(40px)",
  },

  image: {
    width: "210px",
    height: "210px",
    objectFit: "contain",
    position: "relative",
    zIndex: 2,
  },

  content: {
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  tag: {
    alignSelf: "flex-start",
    background: "#f2e4d7",
    color: "#6f4e37",
    padding: "8px 15px",
    borderRadius: "30px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },

  name: {
    fontSize: "2rem",
    color: "#2c1e1a",
    marginTop: "20px",
    lineHeight: "1.1",
    fontWeight: "800",
  },

  description: {
    marginTop: "14px",
    color: "#6b6b6b",
    lineHeight: "1.7",
    fontSize: "0.95rem",
    flex: 1,
  },

  footerCard: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#6f4e37",
  },

  weight: {
    background: "#efe2d3",
    color: "#6f4e37",
    padding: "8px 15px",
    borderRadius: "20px",
    fontWeight: "600",
  },

  backTitle: {
    fontSize: "2rem",
    marginBottom: "25px",
    fontWeight: "800",
  },

  backText: {
    marginBottom: "16px",
    color: "#f3e6db",
    lineHeight: "1.7",
  },

  backDescription: {
    marginTop: "30px",
    lineHeight: "1.8",
    color: "#ddd",
  },

  button: {
    border: "none",
    padding: "14px 24px",
    borderRadius: "40px",
    color: "white",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "1rem",
  },

  mobileCard: {
    background: "rgba(255,255,255,0.82)",
    borderRadius: "28px",
    overflow: "hidden",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
  },

  mobileImageBox: {
    position: "relative",
    height: "260px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to bottom,#f4ece4,#efe5db)",
  },

  mobileGlow: {
    position: "absolute",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(215,168,110,0.25)",
    filter: "blur(40px)",
  },

  mobileImage: {
    width: "210px",
    height: "210px",
    objectFit: "contain",
    position: "relative",
    zIndex: 2,
  },

  mobileContent: {
    padding: "24px",
  },

  mobileTitle: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#2c1e1a",
    marginTop: "16px",
  },

  mobileDescription: {
    marginTop: "12px",
    color: "#666",
    lineHeight: "1.7",
  },

  mobileInfo: {
    marginTop: "25px",
    display: "grid",
    gap: "14px",
  },

  infoItem: {
    background: "#f7efe7",
    padding: "14px",
    borderRadius: "18px",
    display: "flex",
    justifyContent: "space-between",
  },

  infoLabel: {
    color: "#6f4e37",
    fontWeight: "700",
  },

  infoValue: {
    color: "#444",
    fontWeight: "500",
  },

  mobileBottom: {
    marginTop: "28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mobilePrice: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#6f4e37",
  },

  mobileWeight: {
    color: "#777",
    marginTop: "4px",
  },

  mobileButton: {
    border: "none",
    color: "white",
    padding: "14px 24px",
    borderRadius: "18px",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
  },

  footer: {
    background: "#2c1e1a",
    color: "white",
    padding: "70px 20px 20px",
  },

  footerContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
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