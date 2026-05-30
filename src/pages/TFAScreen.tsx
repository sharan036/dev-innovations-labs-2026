import { useEffect, useState } from "react";

export default function TFAScreen() {
  const [qr, setQr] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    fetch("https://app-3rconxdx6q-uc.a.run.app/auth/tfa/setup?userId=DevInnovations", { credentials: "include" })
      .then(res => res.json())
      .then(data => setQr(data.qr));
  }, []);

  const handleVerify = async () => {
    const res = await fetch("https://app-3rconxdx6q-uc.a.run.app/auth/tfa/verify-setup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ userId: 'DevInnovations', token: otp }),
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="p-8 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Setup Two-Factor Authentication</h1>

      {qr && <img src={qr} className="w-64 mx-auto" />}

      <p className="text-gray-700 text-center">
        Scan this QR in Google Authenticator or Authy
      </p>

      <input
        maxLength="6"
        placeholder="Enter 6-digit OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 w-full rounded text-center"
      />

      <button
        onClick={handleVerify}
        className="w-full bg-blue-600 text-white py-3 rounded-lg"
      >
        Verify & Enable TFA
      </button>
    </div>
  );
}
