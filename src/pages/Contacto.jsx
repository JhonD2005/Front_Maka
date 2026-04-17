import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    setLoading(true);
    setOk(false);
    setError(false);

    try {
      await emailjs.send(
        "service_u01yyj8",
        "template_zqetf8o",
        {
          nombre: form.nombre,
          correo: form.correo,
          telefono: form.telefono,
          asunto: form.asunto,
          mensaje: form.mensaje,
        },
        "lbgKczd3ohnMtSvgN"
      );

      setOk(true);

      setForm({
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (err) {
      setError(true);
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section style={styles.section}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.info}
          >
            <span style={styles.badge}>☕ Maka Café</span>

            <h1 style={styles.title}>Contáctanos</h1>

            <p style={styles.text}>
              ¿Tienes preguntas, pedidos especiales o deseas trabajar con
              nosotros? Escríbenos y te responderemos pronto.
            </p>

            <div style={styles.data}>
              <p>📧 cafemaka2@gmail.com</p>
              <p>📍 Andes, Antioquia, Colombia</p>
              <p>📞 +57 320 5971279</p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={enviarFormulario}
            style={styles.form}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={styles.formTitle}>Envíanos un mensaje</h2>

            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              value={form.asunto}
              onChange={handleChange}
              style={styles.input}
            />

            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              rows="6"
              value={form.mensaje}
              onChange={handleChange}
              required
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {ok && (
              <p style={styles.success}>
                Mensaje enviado correctamente.
              </p>
            )}

            {error && (
              <p style={styles.error}>
                Ocurrió un error al enviar.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    backgroundImage:
      "url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
  },

  overlay: {
    minHeight: "100vh",
    background: "rgba(0,0,0,.62)",
    display: "flex",
    alignItems: "center",
  },

  container: {
    maxWidth: 1250,
    margin: "0 auto",
    width: "100%",
    padding: "0 10px",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
    gap: 45,
    alignItems: "center",
  },

  info: {
  color: "white",
  width: "100%",
  padding: "0 10px",
  boxSizing: "border-box",
 },

  badge: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: 30,
    background: "rgba(255,255,255,.12)",
    marginBottom: 20,
  },

  title: {
    fontSize: "clamp(2.2rem,6vw,4rem)",
    marginBottom: 20,
  },

  text: {
    lineHeight: 1.8,
    maxWidth: 520,
    marginBottom: 30,
    fontSize: "1.1rem",
  },

  data: {
    display: "grid",
    gap: 12,
    fontSize: "1rem",
  },

  form: {
    background: "white",
    padding: 35,
    borderRadius: 22,
    boxShadow: "0 20px 50px rgba(0,0,0,.18)",
  },

  formTitle: {
    fontSize: "1.7rem",
    marginBottom: 22,
    color: "#2c1e1a",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    marginBottom: 15,
    borderRadius: 12,
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid #ddd",
    resize: "none",
    marginBottom: 18,
    fontSize: "1rem",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: 14,
    background: "#6f4e37",
    color: "white",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
  },

  success: {
    marginTop: 15,
    color: "green",
    fontWeight: "600",
  },

  error: {
    marginTop: 15,
    color: "red",
    fontWeight: "600",
  },
};