import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo_maka.png";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpenMenu(false);
  };

  const menuItems = (
    <>
      <NavLink to="/" end className="nav-item" onClick={() => setOpenMenu(false)}>
        Inicio
      </NavLink>
      <NavLink to="/productos" className="nav-item" onClick={() => setOpenMenu(false)}>
        Productos
      </NavLink>
      <NavLink to="/recetas" className="nav-item" onClick={() => setOpenMenu(false)}>
        Recetas
      </NavLink>
      <NavLink to="/cart" className="nav-item" onClick={() => setOpenMenu(false)}>
        Carrito
      </NavLink>
      {user ? (
        <>
          <span style={styles.user}>Hola, {user.nombre}</span>
          <button onClick={handleLogout} className="nav-item logout-btn">
            Cerrar sesión
          </button>
        </>
      ) : (
        <NavLink to="/login" className="nav-item" onClick={() => setOpenMenu(false)}>
          Iniciar sesión
        </NavLink>
      )}
    </>
  );

  return (
    <nav style={styles.navbar}>
      <div style={styles.inner}>
        <div style={styles.logo}>
          <img src={logo} alt="logo maka" style={styles.logoImg} />
        </div>

        {isMobile ? (
          <>
            <div style={styles.threeDots} onClick={() => setOpenMenu(!openMenu)}>
              <span style={styles.dot}></span>
              <span style={styles.dot}></span>
              <span style={styles.dot}></span>
            </div>

            {openMenu && <div style={styles.dropdown}>{menuItems}</div>}
          </>
        ) : (
          <div style={styles.menu}>{menuItems}</div>
        )}
      </div>

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
            display: inline-block;
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
    </nav>
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
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    background: "rgba(62, 39, 35, 0.95)",
    zIndex: 1000,
  },

  inner: {
    width: "100%",
    maxWidth: "1200px",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },

  logo: {
    display: "flex",
    alignItems: "center",
  },

  logoImg: {
    height: "60px",
    objectFit: "contain",
  },

  menu: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },

  threeDots: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "25px",
    height: "20px",
    cursor: "pointer",
  },

  dot: {
    width: "5px",
    height: "5px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    display: "block",
  },

  dropdown: {
    position: "absolute",
    top: "80px",
    right: 0,
    background: "rgba(62, 39, 35, 0.95)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
    gap: "10px",
    minWidth: "150px",
    zIndex: 1001,
  },

  user: {
    color: "#fff",
    fontWeight: "500",
  },
};