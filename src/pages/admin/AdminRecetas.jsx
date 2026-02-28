import { useEffect, useState } from "react";
import api from "../../services/api";

export default function AdminRecetas() {
  const [recetas, setRecetas] = useState([]);

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    ingredientes: "",
    pasos: "",
  });

  const fetchRecetas = async () => {
    const res = await api.get("/recetas");
    setRecetas(res.data);
  };

  useEffect(() => {
    fetchRecetas();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/recetas", form);

    setForm({
      titulo: "",
      descripcion: "",
      ingredientes: "",
      pasos: "",
    });

    fetchRecetas();
  };

  const handleDelete = async (id) => {
    await api.delete(`/recetas/${id}`);
    fetchRecetas();
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.mainTitle}>Panel de Gestión de Recetas</h2>

        <div style={styles.card}>
          <h3 style={styles.sectionTitle}>Agregar Nueva Receta</h3>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              name="titulo"
              placeholder="Título"
              value={form.titulo}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <textarea
              name="descripcion"
              placeholder="Descripción"
              value={form.descripcion}
              onChange={handleChange}
              required
              style={styles.textarea}
            />

            <textarea
              name="ingredientes"
              placeholder="Ingredientes (separados por coma)"
              value={form.ingredientes}
              onChange={handleChange}
              required
              style={styles.textarea}
            />

            <textarea
              name="pasos"
              placeholder="Pasos de preparación"
              value={form.pasos}
              onChange={handleChange}
              required
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Guardar Receta
            </button>
          </form>
        </div>

        <div style={styles.card}>
          <h3 style={styles.sectionTitle}>Recetas Registradas</h3>

          {recetas.length === 0 ? (
            <p>No hay recetas registradas.</p>
          ) : (
            recetas.map((r) => (
              <div key={r.id} style={styles.recipeItem}>
                <div>
                  <h4 style={{ margin: "0 0 5px 0" }}>{r.titulo}</h4>
                  <p style={{ margin: "0 0 5px 0", fontSize: 14 }}>
                    {r.descripcion}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(r.id)}
                  style={styles.deleteButton}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  container: {
    width: "100%",
    maxWidth: 900,
  },
  mainTitle: {
    textAlign: "center",
    color: "white",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 30,
    borderRadius: 15,
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    marginBottom: 30,
  },
  sectionTitle: {
    marginBottom: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 14,
  },
  textarea: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    minHeight: 90,
    fontSize: 14,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    border: "none",
    backgroundColor: "#4e342e",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  recipeItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottom: "1px solid #ddd",
  },
  deleteButton: {
    backgroundColor: "#c62828",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },
};