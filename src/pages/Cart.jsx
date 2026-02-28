import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import premium from "../assets/premium.jpeg";
import tradicional from "../assets/tradicional.jpeg";
import fermentacion from "../assets/fermentacion prolongada.jpeg";

const imagenes = {
  1: premium,
  2: tradicional,
  3: fermentacion,
};

export default function Cart() {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div style={{ marginTop: "100px", padding: "40px 20px" }}>
      <div style={styles.container}>
        <h2 style={styles.title}>🛒 Tu Carrito</h2>

        {cart.length === 0 ? (
          <div style={styles.empty}>
            <h3>Tu carrito está vacío</h3>
            <p>Agrega productos para comenzar tu experiencia Maka.</p>
          </div>
        ) : (
          <>
            <div style={styles.grid}>
              {cart.map(item => (
                <div key={item.id} style={styles.card}>
                  {/* Imagen asignada según el id del producto */}
                  <img
                    src={imagenes[item.id] || premium}
                    alt={item.nombre}
                    style={styles.image}
                  />

                  <div style={styles.info}>
                    <h3 style={styles.name}>{item.nombre}</h3>
                    <p style={styles.price}>${item.precio.toFixed(2)}</p>

                    <div style={styles.quantityBox}>
                      <button style={styles.qtyBtn} onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span style={styles.quantity}>{item.quantity}</span>
                      <button style={styles.qtyBtn} onClick={() => addToCart(item)}>+</button>
                    </div>

                    <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.summary}>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button style={styles.checkoutBtn}>Finalizar Compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "1000px", margin: "0 auto" },
  title: { textAlign: "center", fontSize: "2.5rem", marginBottom: "40px", color: "#4a3320" },
  empty: { textAlign: "center", padding: "60px", background: "#f5f1ed", borderRadius: "20px", color: "#7a5a40", fontSize: "1.1rem" },
  grid: { display: "flex", flexDirection: "column", gap: "30px" },
  card: { display: "flex", gap: "20px", background: "#fff8f2", padding: "20px", borderRadius: "20px", boxShadow: "0 15px 30px rgba(0,0,0,0.1)", alignItems: "center" },
  image: { width: "140px", height: "140px", objectFit: "cover", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
  info: { flex: 1 },
  name: { fontSize: "1.4rem", fontWeight: "700", marginBottom: "5px", color: "#4a3320" },
  price: { fontSize: "1.2rem", fontWeight: "600", color: "#5d4037", marginBottom: "10px" },
  quantityBox: { display: "flex", alignItems: "center", gap: "10px", margin: "10px 0" },
  qtyBtn: { width: "35px", height: "35px", borderRadius: "50%", border: "none", background: "#3e2723", color: "white", cursor: "pointer", fontWeight: "700", fontSize: "1.1rem" },
  quantity: { fontWeight: "bold", fontSize: "1.1rem", minWidth: "20px", textAlign: "center" },
  removeBtn: { marginTop: "10px", background: "transparent", border: "none", color: "red", cursor: "pointer", fontWeight: "600" },
  summary: { marginTop: "40px", textAlign: "right", fontSize: "1.2rem", color: "#4a3320" },
  checkoutBtn: { marginTop: "10px", padding: "12px 30px", background: "#d4a373", border: "none", borderRadius: "30px", fontWeight: "700", cursor: "pointer", fontSize: "1rem", color: "#4a3320" },
};