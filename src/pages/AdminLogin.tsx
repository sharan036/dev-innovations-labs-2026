import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      navigate("/admin-verify");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      
      <input
        type="password"
        className="border p-2 rounded w-full"
        placeholder="Admin Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleLogin}
      >
        Continue
      </button>
    </div>
  );
}
