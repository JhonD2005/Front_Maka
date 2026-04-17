import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div style={{ marginTop: "100px", padding: "40px 20px" }}>
      <div style={styles.container}>
        <h2 style={styles.title}>Tu Carrito</h2>

        {cart.length === 0 ? (
          <div style={styles.empty}>
            <h3>🛒 Tu carrito está vacío</h3>
            <p>Agrega productos para comenzar tu experiencia Maka.</p>
          </div>
        ) : (
          <>
            <div style={styles.grid}>
              {cart.map(item => (
                <div key={item.id} style={styles.card}>
                  
                  <img src={img} alt={item.nombre} style={styles.image} />

                  <div style={styles.info}>
                    <h3>{item.nombre}</h3>
                    <p>${item.precio}</p>

                    <div style={styles.quantityBox}>
                      <button 
                        style={styles.qtyBtn}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span style={styles.quantity}>
                        {item.quantity}
                      </span>

                      <button 
                        style={styles.qtyBtn}
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>

                    <button 
                      style={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.summary}>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button style={styles.checkoutBtn}>
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "40px",
  },

  empty: {
    textAlign: "center",
    padding: "60px",
    background: "#f5f1ed",
    borderRadius: "20px",
  },

  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  card: {
    display: "flex",
    gap: "20px",
    background: "white",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    alignItems: "center",
  },

  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "15px",
  },

  info: {
    flex: 1,
  },

  quantityBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0",
  },

  qtyBtn: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    border: "none",
    background: "#3e2723",
    color: "white",
    cursor: "pointer",
  },

  quantity: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },

  removeBtn: {
    marginTop: "10px",
    background: "transparent",
    border: "none",
    color: "red",
    cursor: "pointer",
  },

  summary: {
    marginTop: "40px",
    textAlign: "right",
  },

  checkoutBtn: {
    marginTop: "10px",
    padding: "12px 30px",
    background: "#d7a86e",
    border: "none",
    borderRadius: "30px",
    fontWeight: "600",
    cursor: "pointer",
  },
};