import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import makaImg from "../assets/maka01.jpeg";
import premiumImg from "../assets/IMG_0051.jpg";  
import honeyImg from "../assets/IMG_0053.jpg";
import tradicionalImg from "../assets/IMG_0056.jpg";
import entrevistaVideo from "../assets/entrevistaVideo.mp4";

export default function Home() {
  const heroImages = [
    "https://images.pexels.com/photos/34073/pexels-photo.jpg",
    "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
    "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  const products = [
    {
      name: "Café Premium",
      price: "$30.000",
      img: premiumImg,
    },

    {
      name: "Café Honey",
      price: "$35.000",
      img: honeyImg,
    },
    
    {
      name: "Café Tradicional",
      price: "$25.000",
      img: tradicionalImg,
    },
  ];

  const videos = [
  {
    src: entrevistaVideo,
    title: "Entrevista Maka",
  },
];

  return (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.slide,
              backgroundImage: `url(${img})`,
              opacity: current === i ? 1 : 0,
            }}
            animate={{ scale: current === i ? 1.08 : 1 }}
            transition={{ duration: 6 }}
          />
        ))}

        <div style={styles.overlay}>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={styles.heroTitle}
          >
            Descubre el verdadero sabor del café artesanal
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            style={styles.heroText}
          >
            Experiencia • Aroma • Pasión
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/productos" style={styles.primaryBtn}>
              Explorar Productos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SOBRE MAKA */}
      <section style={styles.sectionLight}>
        <div style={styles.containerGrid}>
          <motion.img
            src= {makaImg}
            style={styles.aboutImg}
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 style={styles.title}>Conoce a Maka</h2>

            <p style={styles.text}>
              Maka nace de la pasión por el café tradicional y la creación de
              experiencias memorables.
            </p>

            <p style={styles.text}>
              Nuestra misión es llevar calidad, historia y sabor auténtico a
              cada taza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTOS */}
     <section style={styles.sectionWhite}>
     <div style={styles.container}>
     <motion.h2
      style={styles.titleCenter}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
     >
      Productos Destacados
    </motion.h2>

    <div style={styles.grid}>
      {products.map((item, i) => (
        <motion.div
          key={i}
          style={styles.card}
          whileHover={{ y: -12, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Imagen */}
          <div style={styles.productImageContainer}>
            <img
              src={item.img}
              alt={item.name}
              style={styles.productImg}
            />
          </div>

          {/* Información */}
          <h3 style={styles.productTitle}>{item.name}</h3>

          <p style={styles.price}>{item.price}</p>

          <Link to="/productos" style={styles.smallBtn}>
            Ver producto
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* BENEFICIOS */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <h2 style={styles.titleCenter}>¿Por qué elegir Maka?</h2>

          <div style={styles.grid}>
            {[
              " 100% Orgánico",
              " Tostado Artesanal",
              "100% Campesino",
            ].map((item, i) => (
              <motion.div
                key={i}
                style={styles.card}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3>{item}</h3>
                <p>Calidad garantizada para verdaderos amantes del café.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
     <section style={styles.sectionWhite}>
     <div style={styles.container}>
     <h2 style={styles.titleCenter}>La Historia de Maka</h2>

    <motion.div
      style={styles.videoCard}
      whileHover={{ scale: 1.02 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <video
        src={entrevistaVideo}
        controls
        preload="metadata"
        playsInline
        style={styles.video}
      />
    </motion.div>
  </div>
</section>

     {/* CTA FINAL */}
<section style={styles.ctaSplit}>
  {/* Imagen izquierda */}
  <div style={styles.ctaImage}></div>

  {/* Contenido derecha */}
  <div style={styles.ctaContent}>
    <div style={styles.ctaInner}>
      <h2 style={styles.ctaTitle}>
        Vive la experiencia Maka
      </h2>

      <p style={styles.ctaText}>
        Café premium, aroma inolvidable y calidad real en cada taza.
      </p>

      <Link to="/productos" style={styles.secondaryBtn}>
        Comprar Ahora
      </Link>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
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
            <p>📍 Andes, Antioquia</p>
            <p>📧 cafemaka2@gmail.com</p>
            <p>📞 +57 320 5971279</p>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © {new Date().getFullYear()} Maka Café
        </div>
      </footer>
    </>
  );
}

const styles = {
  hero: {
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  slide: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 1.5s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,.55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: 20,
    color: "white",
  },

  heroTitle: {
    fontSize: "clamp(2rem,6vw,4rem)",
    maxWidth: 900,
  },

  heroText: {
    margin: "20px 0 30px",
    fontSize: "1.2rem",
  },

  primaryBtn: {
    background: "#6f4e37",
    color: "white",
    padding: "14px 35px",
    borderRadius: 30,
    textDecoration: "none",
  },

  secondaryBtn: {
    background: "#d7a86e",
    color: "#2c1e1a",
    padding: "14px 35px",
    borderRadius: 30,
    textDecoration: "none",
    fontWeight: "700",
  },

  sectionLight: {
    padding: "100px 20px",
    background: "#f5f1ed",
  },

  sectionWhite: {
    padding: "100px 20px",
    background: "#fff",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },

  containerGrid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: 40,
    alignItems: "center",
  },

  aboutImg: {
    width: "100%",
    height: 500,
    objectFit: "cover",
    borderRadius: 20,
  },

  title: {
    fontSize: "clamp(2rem,5vw,3rem)",
    marginBottom: 20,
    color: "#2c1e1a",
  },

  titleCenter: {
    textAlign: "center",
    fontSize: "clamp(2rem,5vw,3rem)",
    marginBottom: 50,
    color: "#2c1e1a",
  },

  text: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    marginBottom: 18,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 30,
  },

  card: {
    background: "white",
    padding: 20,
    borderRadius: 18,
    boxShadow: "0 12px 30px rgba(0,0,0,.08)",
    textAlign: "center",
  },

  productImg: {
    width: "100%",
    height: 240,
    objectFit: "cover",
    borderRadius: 14,
    marginBottom: 15,
  },

  price: {
    color: "#6f4e37",
    fontWeight: "700",
    marginBottom: 14,
  },

  smallBtn: {
    display: "inline-block",
    marginTop: 10,
    padding: "10px 18px",
    borderRadius: 20,
    background: "#3e2723",
    color: "white",
    textDecoration: "none",
  },

 videoCard: {
  position: "relative",
  width: "100%",
  maxWidth: "300px",
  margin: "0 auto",
  borderRadius: 22,
  overflow: "hidden",
  boxShadow: "0 18px 40px rgba(0,0,0,.18)",
},

video: {
  width: "100%",
  maxWidth: "420px",
  maxHeight: "720px",
  margin: "0 auto",
  display: "block",
  objectFit: "cover",
  borderRadius: 22,
  background: "#000",
},

playLabel: {
  position: "absolute",
  top: 20,
  left: 20,
  background: "rgba(62,39,35,.85)",
  color: "white",
  padding: "10px 18px",
  borderRadius: 30,
  fontWeight: "600",
  fontSize: "14px",
  backdropFilter: "blur(8px)",
},
  ctaSplit: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  minHeight: "520px",
  overflow: "hidden",
},

ctaImage: {
  backgroundImage:
    "url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "520px",
  clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
  position: "relative",
  zIndex: 2, 
},

ctaContent: {
  background: "#3e2723",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  position: "relative",
  zindex: 1,
  marginLeft: "-19%",
},

ctaInner: {
  maxWidth: "430px",
  width: "100%",
},

ctaTitle: {
  fontSize: "clamp(2rem,5vw,3.2rem)",
  marginBottom: "20px",
  lineHeight: 1.2,
},

ctaText: {
  fontSize: "1.1rem",
  lineHeight: 1.8,
  marginBottom: "28px",
},

/* MOBILE */
"@media (max-width: 768px)": {
  ctaSplit: {
    gridTemplateColumns: "1fr",
    minHeight: "auto",
  },

  ctaImage: {
    minHeight: "260px",
    clipPath: "none",
  },

  ctaContent: {
    padding: "60px 25px",
    textAlign: "center",
    marginLeft: 0,
  },

  ctaInner: {
    maxWidth: "100%",
  },

  ctaTitle: {
    fontSize: "2rem",
  },

  ctaText: {
    fontSize: "1rem",
  },
},

  footer: {
    background: "#2c1e1a",
    color: "white",
    padding: "60px 20px 20px",
  },

  footerGrid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 30,
  },

  footerLink: {
    color: "#d7a86e",
    textDecoration: "none",
  },

  footerBottom: {
    textAlign: "center",
    marginTop: 40,
    paddingTop: 20,
    borderTop: "1px solid rgba(255,255,255,.1)",
  },
};