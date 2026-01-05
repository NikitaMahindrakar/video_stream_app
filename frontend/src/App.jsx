import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("home"); 
  const [role, setRole] = useState(null);

  if (page === "dashboard") {
    return <Dashboard role={role} setPage={setPage} />;
  }

  if (page === "login") {
    return <Login setPage={setPage} setRole={setRole} />;
  }

  if (page === "register") {
    return <Register setPage={setPage} />;
  }

  // HOME PAGE (Login / Register choice)
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
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      width: "320px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
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
    <h2 style={{ marginBottom: "10px", color: "#333" }}>
      Welcome 👋
    </h2>

    <p style={{ marginBottom: "30px", color: "#666" }}>
      Please login or create an account
    </p>

    <button
      onClick={() => setPage("login")}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        border: "none",
        borderRadius: "8px",
        background: "#667eea",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.background = "#5a67d8")}
      onMouseOut={(e) => (e.target.style.background = "#667eea")}
    >
      Login
    </button>

    <button
      onClick={() => setPage("register")}
      style={{
        width: "100%",
        padding: "12px",
        border: "2px solid #667eea",
        borderRadius: "8px",
        background: "#fff",
        color: "#667eea",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onMouseOver={(e) => {
        e.target.style.background = "#667eea";
        e.target.style.color = "#fff";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "#fff";
        e.target.style.color = "#667eea";
      }}
    >
      Register
    </button>
  </div>
</div>
  );
}
