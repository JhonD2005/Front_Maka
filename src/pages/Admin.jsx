import { useState } from "react";
import AdminProductos from "./admin/AdminProductos";
import AdminRecetas from "./admin/AdminRecetas";

export default function Admin() {
  const [section, setSection] = useState("productos");

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.title}>Panel de Administración</h2>

        <div style={styles.menu}>
          <button
            onClick={() => setSection("productos")}
            style={{
              ...styles.button,
              ...(section === "productos" ? styles.activeButton : {}),
            }}
          >
            Gestionar Productos
          </button>

          <button
            onClick={() => setSection("recetas")}
            style={{
              ...styles.button,
              ...(section === "recetas" ? styles.activeButton : {}),
            }}
          >
            Gestionar Recetas
          </button>
        </div>

        <div style={styles.section}>
          {section === "productos" && <AdminProductos />}
          {section === "recetas" && <AdminRecetas />}
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  container: {
    width: "100%",
    maxWidth: 1000,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 15,
    padding: "40px 30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "2.2rem",
    textAlign: "center",
    marginBottom: 30,
    color: "#2c3e50",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  button: {
    padding: "10px 25px",
    fontSize: 16,
    cursor: "pointer",
    borderRadius: 8,
    border: "1px solid #2c3e50",
    backgroundColor: "#fff",
    color: "#2c3e50",
    fontWeight: "bold",
    transition: "all 0.2s ease-in-out",
  },
  activeButton: {
    backgroundColor: "#2c3e50",
    color: "#fff",
  },
  section: {
    marginTop: 20,
  },
};