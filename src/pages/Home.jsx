import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const heroImages = [
    "https://images.pexels.com/photos/34073/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://colombiancoffee.us/cdn/shop/articles/tips-to-recognize-good-quality-coffee-424970.png?v=1713377616&width=1024",
    "https://images.pexels.com/photos/7125492/pexels-photo-7125492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const philosophyImages = [
    "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const storyImages = [
    "https://static.nationalgeographicla.com/files/styles/image_3200/public/cafe01.png.webp?w=1600&h=900",
    "https://mundocafeto.com/wp-content/uploads/2020/02/planta-de-cafe-caracteristicas-750x440.jpg",
  ];

  const [currentHero, setCurrentHero] = useState(0);
  const [currentPhilosophy, setCurrentPhilosophy] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhilosophy((prev) => (prev + 1) % philosophyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [philosophyImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % storyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [storyImages.length]);

  return (
    <>
      <section style={styles.hero}>
        {heroImages.map((img, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              backgroundImage: `url(${img})`,
              opacity: index === currentHero ? 1 : 0,
            }}
          />
        ))}
        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>
            Descubre el verdadero sabor del café artesanal
          </h1>
          <p style={styles.heroText}>Experiencia • Aroma • Pasión</p>
          <Link to="/productos" style={styles.primaryBtn}>
            Explorar Productos
          </Link>
        </div>
      </section>

      <section style={{ ...styles.sectionLight, padding: "100px 20px" }}>
        <div style={{ ...styles.container, display: "flex", gap: 50, alignItems: "center", flexWrap: "wrap" }}>
          
          <div style={{ flex: "1 1 400px", position: "relative", minHeight: 300, borderRadius: 15, overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
            {philosophyImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Filosofia ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 1.5s ease-in-out",
                  opacity: index === currentPhilosophy ? 1 : 0,
                }}
              />
            ))}
          </div>

          <div style={{ flex: "1 1 400px" }}>
            <h2 style={styles.sectionTitle}>Nuestra Filosofía</h2>
            <p style={styles.paragraphCenter}>
              En Maka elegimos los granos más selectos, respetamos los procesos naturales y
              transformamos cada preparación en una experiencia que despierta tus sentidos.
            </p>
            <p style={styles.paragraphCenter}>
              Cada taza es una historia que invita a ser disfrutada y que refleja nuestra pasión por el café artesanal y sostenible.
            </p>
          </div>

        </div>
      </section>

      <section style={{ ...styles.sectionLight, padding: "100px 20px" }}>
        <div style={{ ...styles.container, display: "flex", gap: 50, alignItems: "center", flexWrap: "wrap" }}>
          
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={styles.sectionTitle}>Nuestra Historia</h2>
            <p style={styles.paragraphCenter}>
              Maka nació en lo alto de los Andes, en Antioquia, con una visión sencilla pero poderosa:
              crear café de calidad mientras ayuda a la gente de su tierra. Desde pequeño, su corazón siempre estuvo
              con los jóvenes del campo, viendo cómo muchos talentos se perdían por la falta de oportunidades y los bajos precios de sus cosechas.
            </p>
            <p style={styles.paragraphCenter}>
              Impulsado por ese deseo de cambio, Maka decidió emprender su propio camino. Seleccionando personalmente los mejores granos,
              respetando los procesos naturales y transformando cada taza en algo más que café: es una oportunidad, un impulso para quienes sueñan con un futuro mejor.
            </p>
            <p style={styles.paragraphCenter}>
              Cada sorbo de Maka cuenta una historia de esfuerzo, comunidad y esperanza. Porque para nosotros, el café no solo se cultiva… se vive, se comparte y se transforma en oportunidades.
            </p>
          </div>

          <div style={{ flex: "1 1 400px", position: "relative", minHeight: 300, borderRadius: 15, overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
            {storyImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Historia ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 1.5s ease-in-out",
                  opacity: index === currentStory ? 1 : 0,
                }}
              />
            ))}
          </div>

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
    overflow: "hidden" },

  slide: { 
    position: "absolute", 
    inset: 0, 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    transition: "opacity 2.5s ease-in-out" },

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
    zIndex: 2 },

  heroTitle: { 
    fontSize: "3rem", 
    maxWidth: 900, 
    marginBottom: 20 },

  heroText: { 
    fontSize: "1.3rem", 
    marginBottom: 30 },

  sectionLight: { 
    background: "#f5f1ed" },

  sectionWhite: { 
    padding: "100px 20px", 
    background: "white" },

  container: { 
    maxWidth: 1200, 
    margin: "0 auto" },

  sectionTitle: { 
    fontSize: "2.5rem", 
    marginBottom: 20 },

  paragraphCenter: { 
    maxWidth: 700, 
    margin: "0 auto 20px", 
    lineHeight: 1.8 },

  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
    gap: 40 },

  card: { 
    padding: 30, 
    borderRadius: 15, 
    background: "#fff", 
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)", 
    textAlign: "center" },

  primaryBtn: { 
    background: "#6f4e37", 
    padding: "14px 35px", 
    borderRadius: 30, 
    color: "white", 
    textDecoration: "none", 
    fontWeight: "600" },

  secondaryBtn: { 
    background: "#d7a86e", 
    padding: "14px 35px", 
    borderRadius: 30, 
    color: "#3e2723", 
    textDecoration: "none", 
    fontWeight: "600" },

  ctaSection: { 
    padding: "120px 20px", 
    background: "#3e2723", 
    color: "white", 
    textAlign: "center" },

  ctaTitle: { 
    fontSize: "2.5rem", 
    marginBottom: 20 },

  ctaText: { 
    marginBottom: 30 },

  footer: { 
    background: "#2c1e1a", 
    color: "white", 
    padding: "60px 20px 20px" },

  footerContainer: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
    gap: 40, 
    maxWidth: 1200, 
    margin: "0 auto" },

  footerLink: { 
    color: "#d7a86e", 
    textDecoration: "none" },
  footerBottom: { 
    textAlign: "center", 
    marginTop: 40, 
    borderTop: "1px solid rgba(255,255,255,0.2)", 
    paddingTop: 20, 
    fontSize: 14 },
};