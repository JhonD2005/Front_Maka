export default function WhatsAppButton() {
  const phone = "573205971279";
  const message = "Hola, quiero información sobre los productos de Maka Café";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.btn}
    >
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      style={{ width: 34, height: 34 }}
      />
    </a>
  );
}

const styles = {
  btn: {
    position: "fixed",
    right: "22px",
    bottom: "22px",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    background: "#25D366",
    color: "white",
    fontSize: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 10px 30px rgba(0,0,0,.25)",
    zIndex: 9999,
    transition: "0.3s",
  },
};