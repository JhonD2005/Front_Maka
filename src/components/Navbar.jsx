import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/Maka_Logo.jpeg";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.inner}>
          
          {/* LOGO */}
          <div style={styles.logo}>
            <img src={logo} alt="Maka Logo" style={styles.logoImg} />
          </div>

          {/* MENU */}
          <div style={styles.menu}>
            <NavLink to="/" end className="nav-item">
              Inicio
            </NavLink>

            <NavLink to="/productos" className="nav-item">
              Productos
            </NavLink>

            <NavLink to="/recetas" className="nav-item">
              Recetas
            </NavLink>

            <NavLink to="/cart" className="nav-item">
              Carrito
            </NavLink>

            {user ? (
              <>
                <span style={styles.user}>
                  Hola, {user.nombre}
                </span>

                <button
                  onClick={handleLogout}
                  className="nav-item logout-btn"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <NavLink to="/login" className="nav-item">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>

      <style>
        {`
          .nav-item {
            padding: 8px 18px;
            border-radius: 25px;
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: all 0.3s ease;
            cursor: pointer;
            background: transparent;
            border: none;
          }

          .nav-item:hover {
            transform: scale(1.12);
            background: rgba(255,255,255,0.1);
          }

          .nav-item.active {
            background: #d7a86e;
            color: #3e2723;
            font-weight: 600;
            transform: scale(1.05);
          }

          .logout-btn {
            background: #d7a86e;
            color: #3e2723;
            font-weight: 600;
          }

          .logout-btn:hover {
            transform: scale(1.12);
            background: #e6bb84;
          }
        `}
      </style>
    </>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    display: "flex",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    background: "rgba(62, 39, 35, 0.85)",
    zIndex: 1000,
  },

  inner: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    display: "flex",
    alignItems: "center",
  },

  logoImg: {
    height: "60px",   // ligeramente más equilibrado
    objectFit: "contain",
  },

  menu: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },

  user: {
    color: "#fff",
    fontWeight: "500",
  },
};