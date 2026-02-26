import hero from "../assets/finca-maka.jpeg";
import about from "../assets/imagen_2.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBackground}>
          <img src={hero} alt="Maka Café" style={styles.heroImg} />
        </div>

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
          <h2 style={styles.ctaTitle}>
            Vive la experiencia Maka
          </h2>

          <p style={styles.ctaText}>
            Haz tu pedido hoy y disfruta del mejor café artesanal.
          </p>

          <Link to="/productos" style={styles.secondaryBtn}>
            Comprar Ahora
          </Link>
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: {
  position: "relative",
  marginTop: "79px", // altura del navbar
  height: "calc(100vh - 1px)", // ajusta a tu navbar
  width: "100%",              // 🔥 ahora sí usamos vw
  marginLeft: "calc(-50vw + 50%)", // 🔥 elimina cualquier centrado padre
  overflow: "hidden",
},

heroBackground: {
  position: "absolute",
  inset: 1,
},

heroImg: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  filter: "brightness(55%)",
},

  heroOverlay: {
    position: "relative",
    zIndex: 1,
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
    fontSize: "3.2rem",
    marginBottom: 20,
    maxWidth: "900px",
  },

  heroText: {
    fontSize: "1.3rem",
    marginBottom: 30,
    letterSpacing: "1px",
  },

  sectionLight: {
    background: "#f5f1ed",
    padding: "100px 20px",
  },

  sectionWhite: {
    background: "white",
    padding: "100px 20px",
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
    gap: 60,
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
    marginBottom: 25,
  },

  paragraph: {
    lineHeight: 1.8,
    marginBottom: 25,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 50,
    textAlign: "center",
    marginTop: 40,
  },

  primaryBtn: {
    background: "#5d4037",
    padding: "14px 35px",
    borderRadius: 30,
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.3s",
  },

  darkBtn: {
    background: "#3e2723",
    padding: "12px 30px",
    borderRadius: 25,
    color: "white",
    textDecoration: "none",
  },

  secondaryBtn: {
    background: "#d7a86e",
    padding: "14px 35px",
    borderRadius: 30,
    color: "#3e2723",
    fontWeight: "600",
    textDecoration: "none",
  },

  ctaSection: {
    padding: "120px 20px",
    background: "#3e2723",
    color: "white",
  },

  ctaTitle: {
    fontSize: "2.5rem",
    marginBottom: 20,
  },

  ctaText: {
    marginBottom: 30,
    fontSize: "1.1rem",
  },
};