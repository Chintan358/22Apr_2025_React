// App.js
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login with Gmail</h2>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log("User Info:", decoded);
          alert(`Welcome ${decoded.name}`);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default App;
