import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminVerify() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [tfaEnabled, setTfaEnabled] = useState(false);

  // STEP 1 → Check if TFA is enabled or not
  useEffect(() => {
    const checkTFA = async () => {
      try {
        const res = await fetch("https://app-3rconxdx6q-uc.a.run.app/auth/tfa/status?userId=DevInnovations", {
          credentials: "include",
        });
        const data = await res.json();

        if (!data.tfaEnabled) {
          // If TFA NOT enabled, redirect to TFA setup page
          navigate("/setup-tfa");
        } else {
          setTfaEnabled(true);
        }
      } catch (err) {
        console.error("Error checking TFA:", err);
      } finally {
        setLoading(false);
      }
    };

    checkTFA();
  }, [navigate]);

  // STEP 2 → Verify TFA code
  const verifyCode = async () => {
    if (!code || code.length !== 6) {
      alert("Enter a valid 6-digit code");
      return;
    }

    const res = await fetch("https://app-3rconxdx6q-uc.a.run.app/auth/tfa/verify-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ userId: 'DevInnovations', token: code }),
    });

    const data = await res.json();

    if (data.success) {
      sessionStorage.setItem("tfa_verified", "true");
      navigate("/secure-dashboard");
    } else {
      alert("Invalid TFA code");
    }
  };

  if (loading) return <p className="text-center p-8">Checking security...</p>;

  if (!tfaEnabled) return null; 

  return (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Enter TFA Code</h1>

      <input
        type="text"
        maxLength={6}
        className="border p-2 rounded w-full text-center"
        placeholder="Enter 6-digit code"
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        className="w-full px-4 py-2 bg-green-600 text-white rounded"
        onClick={verifyCode}
      >
        Verify
      </button>
    </div>
  );
}
