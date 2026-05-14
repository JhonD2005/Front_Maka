export default function Recetas() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f8f8",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          padding: "50px 40px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
            color: "#222",
          }}
        >
           Próximamente
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Muy pronto podrás explorar contenido exclusivo en Maka.
        </p>
      </div>
    </section>
  );
}