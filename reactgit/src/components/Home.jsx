import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to the Home Page!</p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          Register
        </button>

        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;