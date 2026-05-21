export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        overflow: "hidden",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            padding: "12px 20px",
            border: "1px solid rgba(255,255,255,.15)",
            borderRadius: "999px",
            color: "#94a3b8",
            marginBottom: "24px",
          }}
        >
          First Website • Next.js • Vercel
        </div>

        <h1
          style={{
            fontSize: "clamp(56px,10vw,120px)",
            lineHeight: 1,
            margin: 0,
            fontWeight: 800,
          }}
        >
          Mingwei
        </h1>

        <div
          style={{
            fontSize: "clamp(24px,4vw,42px)",
            color: "#60a5fa",
            marginTop: "16px",
          }}
        >
          Building things on the internet 🚀
        </div>

        <p
          style={{
            marginTop: "30px",
            maxWidth: "700px",
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          My first deployed website built with Next.js, GitHub and Vercel.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "white",
              color: "black",
              border: "none",
              padding: "16px 28px",
              borderRadius: "14px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            View Projects
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,.2)",
              padding: "16px 28px",
              borderRadius: "14px",
              cursor: "pointer",
            }}
          >
            Contact
          </button>
        </div>
      </section>
    </main>
  );
}