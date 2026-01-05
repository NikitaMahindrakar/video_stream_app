import Upload from "./Upload";

export default function Dashboard({ role, setPage }) {
  return (
    <div
  style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  }}
>
   <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "22px",
        fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      🎥 Video Uploading & Streaming App
    </div>
  <div
    style={{
      background: "#fff",
      padding: "40px",
      borderRadius: "14px",
      width: "420px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    }}
  >
    <h2 style={{ marginBottom: "10px", color: "#333", textAlign: "center" }}>
      Dashboard 📊
    </h2>

    <p style={{ textAlign: "center", marginBottom: "25px", color: "#666" }}>
      Logged in as{" "}
      <span
        style={{
          padding: "4px 10px",
          borderRadius: "20px",
          background:
            role === "admin"
              ? "#e53e3e"
              : role === "editor"
              ? "#667eea"
              : "#38a169",
          color: "#fff",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        {role}
      </span>
    </p>

    {/* Upload → ALL ROLES */}
    <div style={{ marginBottom: "20px" }}>
      <Upload />
    </div>

    {/* Editor & Admin */}
    {(role === "editor" || role === "admin") && (
      <button
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "none",
          borderRadius: "8px",
          background: "#667eea",
          color: "#fff",
          fontSize: "15px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.background = "#5a67d8")}
        onMouseOut={(e) => (e.target.style.background = "#667eea")}
      >
        ✏️ Edit Video
      </button>
    )}

    {/* Admin only */}
    {role === "admin" && (
      <button
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "25px",
          border: "none",
          borderRadius: "8px",
          background: "#e53e3e",
          color: "#fff",
          fontSize: "15px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.background = "#c53030")}
        onMouseOut={(e) => (e.target.style.background = "#e53e3e")}
      >
        🗑 Delete Video
      </button>
    )}

    <button
      onClick={() => setPage("home")}
      style={{
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "8px",
        background: "#718096",
        color: "#fff",
        fontSize: "15px",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.background = "#4a5568")}
      onMouseOut={(e) => (e.target.style.background = "#718096")}
    >
      Logout
    </button>
  </div>
</div>

  );
}
