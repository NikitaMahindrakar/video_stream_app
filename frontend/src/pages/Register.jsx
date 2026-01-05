import axios from "axios";
import { useState } from "react";

export default function Register({ setPage }) {
  const [data, setData] = useState({});

  const submit = async () => {
    await axios.post("http://localhost:5000/auth/register", data);
    setPage("login");
  };

  return (
    <>
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
      borderRadius: "12px",
      width: "360px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      textAlign: "center",
    }}
  >
    <h2 style={{ marginBottom: "20px", color: "#333" }}>
      Create Account 📝
    </h2>

    <input
      type="email"
      placeholder="Email"
      onChange={(e) =>
        setData({ ...data, email: e.target.value })
      }
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        outline: "none",
      }}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) =>
        setData({ ...data, password: e.target.value })
      }
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        outline: "none",
      }}
    />

    <select
      onChange={(e) =>
        setData({ ...data, role: e.target.value })
      }
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "25px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        outline: "none",
        background: "#fff",
        cursor: "pointer",
      }}
    >
      <option value="">Select Role</option>
      <option value="viewer">Viewer</option>
      <option value="editor">Editor</option>
      <option value="admin">Admin</option>
    </select>

    <button
      onClick={submit}
      style={{
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "8px",
        background: "#764ba2",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.background = "#6b46c1")}
      onMouseOut={(e) => (e.target.style.background = "#764ba2")}
    >
      Register
    </button>

    <p style={{ marginTop: "15px", fontSize: "13px", color: "#666" }}>
      Already have an account?{" "}
      <span
        style={{ color: "#667eea", cursor: "pointer" }}
        onClick={() => setPage("login")}
      >
        Login
      </span>
    </p>
  </div>
</div>

    </>
  );
}
