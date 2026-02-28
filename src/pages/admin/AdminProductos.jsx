import { useEffect, useState } from "react";
import api from "../../services/api";

export default function AdminProductos() {

  const adminId = 1;

  const [productos, setProductos] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  // Traer productos
  const fetchProductos = () => {
    api.get("/productos")
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // Manejo de inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Guardar / Actualizar producto
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // Actualizar producto
        await api.put(`/productos/${editId}/admin/${adminId}`, form);
        setEditId(null);
        alert("Producto actualizado correctamente");
      } else {
        // Crear producto
        await api.post(`/productos/admin/${adminId}`, form);
        alert("Producto creado correctamente");
      }

      // Limpiar formulario
      setForm({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
      });

      fetchProductos();

    } catch (error) {
      console.error(error);
      alert("Error al guardar el producto");
    }
  };

  // Editar producto
  const handleEdit = (producto) => {
    setForm({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
    });
    setEditId(producto.id);
  };

  // Cancelar edición
  const handleCancelEdit = () => {
    setEditId(null);
    setForm({
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
    });
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    try {
      await api.delete(`/productos/${id}/admin/${adminId}`);
      fetchProductos();
      alert("Producto eliminado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el producto");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.title}>Panel Administrador</h2>

        {/* FORMULARIO */}
        <div style={styles.card}>
          <h3>{editId ? "Editar Producto" : "Agregar Producto"}</h3>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              name="descripcion"
              placeholder="Descripción"
              value={form.descripcion}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              name="precio"
              type="number"
              placeholder="Precio"
              value={form.precio}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              name="stock"
              type="number"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              {editId ? "Actualizar Producto" : "Guardar Producto"}
            </button>

            {editId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                style={styles.cancelButton}
              >
                Cancelar
              </button>
            )}
          </form>
        </div>

        {/* LISTA */}
        <div style={styles.card}>
          <h3>Lista de Productos</h3>

          {productos.length === 0 ? (
            <p>No hay productos registrados</p>
          ) : (
            productos.map(p => (
              <div key={p.id} style={styles.productItem}>
                <div>
                  <strong>{p.nombre}</strong>
                  <p style={{ margin: 0, fontSize: 14 }}>
                    {p.descripcion}
                  </p>
                  <span>
                    ${p.precio} | Stock: {p.stock}
                  </span>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => handleEdit(p)}
                    style={styles.editButton}
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => handleDelete(p.id)}
                    style={styles.deleteButton}
                  >
                    Eliminar
                  </button>
                </div>
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
      "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  container: {
    width: "100%",
    maxWidth: 800
  },
  title: {
    textAlign: "center",
    color: "white",
    marginBottom: 30
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 25,
    borderRadius: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    marginBottom: 25
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15
  },
  input: {
    padding: 10,
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: 14
  },
  button: {
    padding: 12,
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold"
  },
  cancelButton: {
    padding: 10,
    backgroundColor: "#7f8c8d",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },
  productItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottom: "1px solid #ddd"
  },
  editButton: {
    backgroundColor: "#f39c12",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer"
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer"
  }
};