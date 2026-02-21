import hero from "../assets/fondo_cafe.jpg";
import about from "../assets/imagen_2.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ marginTop: "80px" }}>
      
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <img src={hero} alt="Maka Café" style={styles.heroImg} />

        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Descubre el verdadero sabor del café
          </h1>

          <p style={styles.heroText}>
            Artesanal • Orgánico • Premium
          </p>

          <Link to="/productos" style={styles.primaryBtn}>
            Explorar Productos
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <div style={styles.flexWrap}>
            <div style={styles.flexItem}>
              <h2 style={styles.sectionTitle}>Sobre Maka</h2>
              <p style={styles.paragraph}>
                Maka nace del amor por el café artesanal y la dedicación a crear
                experiencias únicas en cada taza. Seleccionamos los mejores
                granos, trabajamos procesos cuidadosos y entregamos calidad
                premium en cada producto.
              </p>

              <Link to="/productos" style={styles.darkBtn}>
                Ver Nuestro Catálogo
              </Link>
            </div>

            <div style={styles.flexItem}>
              <img src={about} alt="Sobre Maka" style={styles.aboutImg} />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
            ¿Por qué elegir Maka?
          </h2>

          <div style={styles.grid}>
            <div>
              <h3>🌱 100% Orgánico</h3>
              <p>Cultivado de manera responsable y sostenible.</p>
            </div>

            <div>
              <h3>🔥 Tostado Artesanal</h3>
              <p>Procesos cuidadosos para resaltar cada nota de sabor.</p>
            </div>

            <div>
              <h3>🚚 Envíos Rápidos</h3>
              <p>Llevamos el mejor café directo a tu puerta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={styles.ctaSection}>
        <div style={styles.containerCenter}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: 20 }}>
            Vive la experiencia Maka
          </h2>

          <p style={{ marginBottom: 30 }}>
            Haz tu pedido hoy y disfruta del mejor café artesanal.
          </p>

          <Link to="/productos" style={styles.secondaryBtn}>
            Comprar Ahora
          </Link>
        </div>
      </section>

    </div>
  );
}

const styles = {
  hero: {
    position: "relative",
    height: "90vh",
    width: "100%",
    overflow: "hidden",
  },

  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(60%)",
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },

  heroTitle: {
    fontSize: "3.5rem",
    marginBottom: 20,
  },

  heroText: {
    fontSize: "1.2rem",
    marginBottom: 30,
  },

  sectionLight: {
    background: "#f5f1ed",
    padding: "80px 20px",
  },

  sectionWhite: {
    background: "white",
    padding: "80px 20px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  containerCenter: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },

  flexWrap: {
    display: "flex",
    gap: 50,
    alignItems: "center",
    flexWrap: "wrap",
  },

  flexItem: {
    flex: 1,
    minWidth: "300px",
  },

  aboutImg: {
    width: "100%",
    borderRadius: 20,
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  },

  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: 20,
  },

  paragraph: {
    lineHeight: 1.8,
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 40,
    textAlign: "center",
  },

  primaryBtn: {
    background: "#5d4037",
    padding: "12px 30px",
    borderRadius: 30,
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
  },

  darkBtn: {
    background: "#3e2723",
    padding: "10px 25px",
    borderRadius: 25,
    color: "white",
    textDecoration: "none",
  },

  secondaryBtn: {
    background: "#d7a86e",
    padding: "12px 30px",
    borderRadius: 30,
    color: "#3e2723",
    fontWeight: "600",
    textDecoration: "none",
  },

  ctaSection: {
    padding: "100px 20px",
    background: "#3e2723",
    color: "white",
  },
};