export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#0f172a,#020617)",
        color: "white",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginTop: "120px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "10px",
          }}
        >
          Mingwei 🚀
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
          }}
        >
          Welcome to my first deployed website
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Projects
          </button>

          <button
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              background: "transparent",
              color: "white",
              border: "1px solid white",
              cursor: "pointer",
            }}
          >
            Contact
          </button>
        </div>
      </section>

      <section
        style={{
          marginTop: "150px",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            color: "#cbd5e1",
          }}
        >
          I built this website using Next.js, GitHub, and Vercel.
        </p>
      </section>
    </main>
  );
}