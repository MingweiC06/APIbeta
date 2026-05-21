import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["800"] });
const dm = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function Home() {
  return (
    <main
      className={dm.className}
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.15); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 30px) scale(0.9); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          60% { transform: translate(40px, 50px) scale(1.08); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.05); }
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .b1 {
          width: 500px; height: 500px;
          background: rgba(99, 62, 255, 0.18);
          top: -10%; left: -10%;
          animation: blob1 9s ease-in-out infinite;
        }
        .b2 {
          width: 420px; height: 420px;
          background: rgba(56, 189, 248, 0.13);
          bottom: -5%; right: -5%;
          animation: blob2 11s ease-in-out infinite;
        }
        .b3 {
          width: 300px; height: 300px;
          background: rgba(236, 72, 153, 0.1);
          top: 40%; left: 30%;
          animation: blob3 13s ease-in-out infinite;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, #050816 100%);
          pointer-events: none;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          color: rgba(255,255,255,0.45);
          font-size: 13px;
          letter-spacing: 0.04em;
          margin-bottom: 32px;
          animation: fadeUp 0.6s ease both;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);
        }
        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          animation: pulseRing 2s ease-in-out infinite;
        }
        .hero-name {
          font-size: clamp(72px, 13vw, 140px);
          line-height: 0.95;
          margin: 0;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff 0%, #a5b4fc 35%, #60a5fa 60%, #e879f9 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeUp 0.6s 0.15s ease both, shimmer 6s linear infinite;
        }
        .tagline {
          font-size: clamp(18px, 3vw, 26px);
          color: rgba(255,255,255,0.5);
          margin-top: 20px;
          font-weight: 300;
          letter-spacing: 0.01em;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .tagline strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }
        .desc {
          margin-top: 20px;
          max-width: 560px;
          color: rgba(255,255,255,0.35);
          font-size: 16px;
          line-height: 1.7;
          animation: fadeUp 0.6s 0.42s ease both;
        }
        .btns {
          display: flex;
          gap: 14px;
          margin-top: 44px;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.6s 0.55s ease both;
        }
        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border: none;
          padding: 16px 32px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.4);
        }
        .btn-ghost {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 16px 32px;
          border-radius: 14px;
          font-size: 15px;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-2px);
          color: #fff;
        }
        .chips {
          display: flex;
          gap: 10px;
          margin-top: 48px;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.6s 0.68s ease both;
        }
        .chip {
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.3);
          font-size: 12px;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="grid-overlay" />
      <div className="vignette" />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
        <div className="badge">
          <span className="dot" />
          First Website · Next.js · Vercel
        </div>

        <h1 className={`${syne.className} hero-name`}>APIbeta</h1>

        <div className="tagline">
          Building things <strong>on the internet</strong> 🚀
        </div>

        <p className="desc">
          My first deployed website built with Next.js, GitHub and Vercel.
        </p>

        <div className="btns">
          <button className={`${dm.className} btn-primary`}>View Projects</button>
          <button className={`${dm.className} btn-ghost`}>Contact</button>
        </div>

        <div className="chips">
          {["NEXT.JS", "TYPESCRIPT", "VERCEL", "GITHUB"].map((tag) => (
            <span key={tag} className={`${syne.className} chip`}>{tag}</span>
          ))}
        </div>
      </div>
    </main>
  );
}