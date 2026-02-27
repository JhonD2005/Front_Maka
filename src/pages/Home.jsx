import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const images = [
    "https://images.pexels.com/photos/34073/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://colombiancoffee.us/cdn/shop/articles/tips-to-recognize-good-quality-coffee-424970.png?v=1713377616&width=1024",
    "https://images.pexels.com/photos/7125492/pexels-photo-7125492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              backgroundImage: `url(${img})`,
              opacity: index === current ? 1 : 0,
            }}
          />
        ))}

        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>
            Descubre el verdadero sabor del café artesanal
          </h1>

          <p style={styles.heroText}>
            Experiencia • Aroma • Pasión
          </p>

          <Link to="/productos" style={styles.primaryBtn}>
            Explorar Productos
          </Link>
        </div>
      </section>

      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Nuestra Filosofía</h2>
          <p style={styles.paragraphCenter}>
            En Maka seleccionamos los mejores granos, respetamos los procesos
            naturales y creamos experiencias que conectan con tus sentidos.
            Cada taza cuenta una historia.
          </p>
        </div>
      </section>

      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>🌱 100% Orgánico</h3>
              <p>Cultivo responsable y sostenible.</p>
            </div>

            <div style={styles.card}>
              <h3>🔥 Tostado Artesanal</h3>
              <p>Procesos cuidadosos que resaltan cada nota.</p>
            </div>

            <div style={styles.card}>
              <h3>🚚 Envíos Rápidos</h3>
              <p>Directo a tu puerta con frescura garantizada.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Vive la experiencia Maka</h2>
        <p style={styles.ctaText}>
          Haz tu pedido hoy y disfruta del mejor café artesanal.
        </p>
        <Link to="/productos" style={styles.secondaryBtn}>
          Comprar Ahora
        </Link>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div>
            <h3>Maka Café</h3>
            <p>Pasión por el café artesanal premium.</p>
          </div>

          <div>
            <h4>Enlaces</h4>
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

  hero: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },

  slide: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 2.5s ease-in-out",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: 20,
    zIndex: 2,
  },

  heroTitle: {
    fontSize: "3rem",
    maxWidth: 900,
    marginBottom: 20,
  },

  heroText: {
    fontSize: "1.3rem",
    marginBottom: 30,
  },

  sectionLight: {
    padding: "100px 20px",
    background: "#f5f1ed",
    textAlign: "center",
  },

  sectionWhite: {
    padding: "100px 20px",
    background: "white",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: 20,
  },

  paragraphCenter: {
    maxWidth: 700,
    margin: "0 auto",
    lineHeight: 1.8,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 40,
  },

  card: {
    padding: 30,
    borderRadius: 15,
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  primaryBtn: {
    background: "#6f4e37",
    padding: "14px 35px",
    borderRadius: 30,
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
  },

  secondaryBtn: {
    background: "#d7a86e",
    padding: "14px 35px",
    borderRadius: 30,
    color: "#3e2723",
    textDecoration: "none",
    fontWeight: "600",
  },

  ctaSection: {
    padding: "120px 20px",
    background: "#3e2723",
    color: "white",
    textAlign: "center",
  },

  ctaTitle: {
    fontSize: "2.5rem",
    marginBottom: 20,
  },

  ctaText: {
    marginBottom: 30,
  },

  footer: {
    background: "#2c1e1a",
    color: "white",
    padding: "60px 20px 20px",
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
    marginTop: 40,
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: 20,
    fontSize: 14,
  },
};