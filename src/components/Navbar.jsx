import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo_maka.jpeg";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [verticalMode, setVerticalMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 980) return;

      if (window.scrollY > 180) {
        setVerticalMode(true);
      } else {
        setVerticalMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`navbar ${verticalMode ? "vertical" : ""}`}>
        <div className="navbar-glow"></div>

        <div className="nav-inner">
          {/* LOGO */}
          <div className="logo-wrap" onClick={() => navigate("/")}>
            <img src={logo} alt="logo maka" className="logo-img" />

            {!verticalMode && (
              <div className="logo-text">
                <span className="brand-top">CAFÉ DE MAKA</span>
                <span className="brand-bottom">
                  Café de calidad artesanal
                </span>
              </div>
            )}
          </div>

          {/* DESKTOP MENU */}
          <div className="desktop-menu">
            <NavLink to="/" end className="nav-item" data-label="Inicio">
              {verticalMode ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                  className="menu-icon"
                />
              ) : (
                "Inicio"
              )}
            </NavLink>

            <NavLink
              to="/productos"
              className="nav-item"
              data-label="Productos"
            >
              {verticalMode ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                  className="menu-icon"
                />
              ) : (
                "Productos"
              )}
            </NavLink>

            <NavLink to="/recetas" className="nav-item" data-label="Recetas">
              {verticalMode ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
                  className="menu-icon"
                />
              ) : (
                "Recetas"
              )}
            </NavLink>

            <NavLink to="/cart" className="nav-item" data-label="Carrito">
              {verticalMode ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                  className="menu-icon"
                />
              ) : (
                "Carrito"
              )}
            </NavLink>

            <NavLink
              to="/AcercaDe"
              className="nav-item"
              data-label="Nosotros"
            >
              {verticalMode ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                  className="menu-icon"
                />
              ) : (
                "Sobre Nosotros"
              )}
            </NavLink>

            <NavLink
              to="/contacto"
              className="nav-item"
              data-label="Contacto"
            >
              {verticalMode ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  className="menu-icon"
                />
              ) : (
                "Contactenos"
              )}
            </NavLink>
          </div>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <NavLink to="/" end className="mobile-link" onClick={closeMenu}>
            Inicio
          </NavLink>

          <NavLink to="/productos" className="mobile-link" onClick={closeMenu}>
            Productos
          </NavLink>

          <NavLink to="/recetas" className="mobile-link" onClick={closeMenu}>
            Recetas
          </NavLink>

          <NavLink to="/cart" className="mobile-link" onClick={closeMenu}>
            Carrito
          </NavLink>

          <NavLink to="/AcercaDe" className="mobile-link" onClick={closeMenu}>
            Sobre Nosotros
          </NavLink>

          <NavLink to="/contacto" className="mobile-link" onClick={closeMenu}>
            Contactenos
          </NavLink>

          {user ? (
            <>
              <span className="mobile-user">☕ {user.nombre}</span>

              <button onClick={handleLogout} className="mobile-btn">
                Cerrar sesión
              </button>
            </>
          ) : (
            <NavLink to="/login" className="mobile-btn" onClick={closeMenu}>
              Login
            </NavLink>
          )}
        </div>
      </nav>

      <style>{`
      
      *{
        box-sizing:border-box;
      }

      .navbar{
        position:fixed;
        top:14px;
        left:50%;
        transform:translateX(-50%);
        width:95%;
        max-width:1450px;
        border-radius:22px;
        background:linear-gradient(135deg,rgba(62,39,35,.92),rgba(32,18,14,.96));
        backdrop-filter:blur(16px);
        border:1px solid rgba(255,255,255,.06);
        box-shadow:0 12px 35px rgba(0,0,0,.35);
        z-index:1000;
        overflow:hidden;
      

      transition:
       width .55s ease,
       max-width .55s ease,
       left .55s ease,
       top .55s ease,
       transform .55s ease,
       border-radius .55s ease,
       opacity .45s ease;
      }

      /* VERTICAL MODE */
      .navbar.vertical{
        left:18px;
        top:50%;
        transform:translateY(-50%);
        width:82px;
        max-width:82px;
        border-radius:28px;
      }

      .navbar-glow{
        position:absolute;
        top:-40px;
        left:-80px;
        width:220px;
        height:160px;
        background:rgba(215,168,110,.18);
        filter:blur(45px);
        border-radius:50%;
      }

      .nav-inner{
        height:78px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 20px;
        position:relative;
        z-index:2;
        transition:.4s ease;
      }

      .navbar.vertical .nav-inner{
        height:auto;
        flex-direction:column;
        justify-content:flex-start;
        gap:18px;
        padding:18px 10px;
      }

      .logo-wrap{
        display:flex;
        align-items:center;
        gap:12px;
        cursor:pointer;
      }

      .navbar.vertical .logo-wrap{
        justify-content:center;
      }

      .logo-img{
        width:56px;
        height:56px;
        object-fit:cover;
        border-radius:14px;
        border:2px solid rgba(215,168,110,.45);
      }

      .logo-text{
        display:flex;
        flex-direction:column;
        line-height:1.1;
        transition:.35s ease;
        opacity:1;
      }

      .brand-top{
        color:white;
        font-weight:800;
        font-size:14px;
        letter-spacing:1px;
      }

      .brand-bottom{
        color:#d7a86e;
        font-size:11px;
        letter-spacing:1.8px;
      }

      .desktop-menu{
        display:flex;
        align-items:center;
        gap:10px;
      }

      .navbar.vertical .desktop-menu{
        flex-direction:column;
        width:100%;
      }

      .navbar.vertical .logo-text{
      opacity:0;
      transform:translateX(-10px);
      width:0;
      overflow:hidden;
     }

      .nav-item{
        text-decoration:none;
        color:white;
        padding:10px 16px;
        border-radius:14px;
        transition:.3s ease;
        font-weight:600;
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .navbar.vertical .nav-item{
        width:54px;
        height:54px;
        padding:0;
      }

      .nav-item:hover{
        transform:translateY(-2px);
        color:#f5d0a1;
        background:rgba(255,255,255,.05);
      }

      .nav-item.active{
        background:linear-gradient(135deg,#d7a86e,#b77945);
        color:#2b1a14;
      }

      .menu-icon{
        width:26px;
        height:26px;
        object-fit:contain;
        filter:brightness(0) invert(1);
      }

      /* TOOLTIP */
      .navbar.vertical .nav-item:hover::after{
        content:attr(data-label);
        position:absolute;
        left:68px;
        background:#2b1a14;
        color:white;
        padding:8px 12px;
        border-radius:12px;
        white-space:nowrap;
        font-size:14px;
        font-weight:600;
      }

      /* HAMBURGER */

      .hamburger{
        display:none;
        width:44px;
        height:44px;
        border:none;
        background:rgba(255,255,255,.06);
        border-radius:12px;
        cursor:pointer;
        position:relative;
      }

      .hamburger span{
        position:absolute;
        left:10px;
        width:24px;
        height:3px;
        background:white;
        border-radius:10px;
        transition:.35s ease;
      }

      .hamburger span:nth-child(1){top:12px;}
      .hamburger span:nth-child(2){top:20px;}
      .hamburger span:nth-child(3){top:28px;}

      .hamburger.active span:nth-child(1){
        transform:rotate(45deg);
        top:20px;
      }

      .hamburger.active span:nth-child(2){
        opacity:0;
      }

      .hamburger.active span:nth-child(3){
        transform:rotate(-45deg);
        top:20px;
      }

      /* MOBILE MENU */

      .mobile-menu{
        max-height:0;
        overflow:hidden;
        display:flex;
        flex-direction:column;
        gap:10px;
        padding:0 18px;
        transition:max-height .45s ease, padding .35s ease;
      }

      .mobile-menu.show{
        max-height:500px;
        padding:0 18px 18px 18px;
      }

      .mobile-link{
        text-decoration:none;
        color:white;
        padding:14px;
        border-radius:14px;
        background:rgba(255,255,255,.04);
        font-weight:600;
      }

      .mobile-btn{
        border:none;
        text-decoration:none;
        padding:14px;
        border-radius:14px;
        background:linear-gradient(135deg,#d7a86e,#b77945);
        color:#2b1a14;
        font-weight:700;
        text-align:center;
      }

      .mobile-user{
        color:white;
        padding:10px 6px;
        font-weight:600;
      }

      /* RESPONSIVE */

      @media(max-width:980px){
        .navbar,
        .navbar.vertical{
          left:50%;
          top:14px;
          transform:translateX(-50%);
          width:95%;
          max-width:1450px;
        }

        .desktop-menu{
          display:none;
        }

        .hamburger{
          display:block;
        }

        .brand-bottom{
          display:none;
        }
      }

      @media(max-width:520px){
        .brand-top{
          font-size:12px;
        }

        .logo-img{
          width:48px;
          height:48px;
        }

        .nav-inner{
          height:72px;
        }
      }

      `}</style>
    </>
  );
}