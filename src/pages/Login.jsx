import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (isRegister && !form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!form.email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Correo inválido";
    }

    if (!form.password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (form.password.length < 6) {
      newErrors.password = "Mínimo 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setServerError("");

    if (!validate()) return;

    try {
      if (isRegister) {
        await api.post("/auth/registrar", {
          nombre: form.nombre,
          email: form.email,
          password: form.password,
          rol: "USER"
        });

        setIsRegister(false);
        return;
      }

      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password
      });

      login(res.data);

      if (res.data.rol === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (error) {
      setServerError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        
        <h2 style={styles.title}>
          {isRegister ? "Crear Cuenta" : "Bienvenido"}
        </h2>

        {serverError && (
          <p style={styles.serverError}>{serverError}</p>
        )}

        {isRegister && (
          <>
            <input
              style={styles.input}
              placeholder="Nombre completo"
              onChange={e => setForm({ ...form, nombre: e.target.value })}
            />
            {errors.nombre && (
              <span style={styles.error}>{errors.nombre}</span>
            )}
          </>
        )}

        <input
          style={styles.input}
          placeholder="Correo electrónico"
          type="email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && (
          <span style={styles.error}>{errors.email}</span>
        )}

        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && (
          <span style={styles.error}>{errors.password}</span>
        )}

        <button style={styles.mainButton} onClick={handleSubmit}>
          {isRegister ? "Registrarme" : "Ingresar"}
        </button>

        <button
          style={styles.switchButton}
          onClick={() => {
            setErrors({});
            setServerError("");
            setIsRegister(!isRegister);
          }}
        >
          {isRegister
            ? "Ya tengo cuenta"
            : "Crear una cuenta"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
  position: "fixed",
  top: 80,        
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url('https://images.pexels.com/photos/4085266/pexels-photo-4085266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
},

  card: {
    background: "white",
    padding: "50px 40px",
    borderRadius: "20px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
  },

  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "10px",
  },

  input: {
    padding: "12px 15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
  },

  mainButton: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    background: "#3e2723",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },

  switchButton: {
    background: "transparent",
    border: "none",
    color: "#3e2723",
    fontSize: "0.85rem",
    cursor: "pointer",
    marginTop: "10px",
  },

  error: {
    color: "red",
    fontSize: "0.8rem",
    marginBottom: "5px",
  },

  serverError: {
    background: "#ffe5e5",
    color: "#b30000",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "0.85rem",
    textAlign: "center",
    marginBottom: "10px",
  },
};