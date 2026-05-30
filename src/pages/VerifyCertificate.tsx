import { useState } from "react";

export default function VerifyCertificate() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);

  const verify = async () => {
    if (!code) {
      alert("Enter certificate code");
      return;
    }

    try {
      const res = await fetch(
        `https://app-3rconxdx6q-uc.a.run.app/certificates/verify?code=${code}`
      );

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Verify Certificate</h1>

      <input
        className="border text-black p-3 w-full rounded mb-4"
        placeholder="Enter certificate code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={verify}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Verify
      </button>

      {result && (
        <div className="mt-6 bg-primary/20 p-4 rounded shadow">
          {result.valid ? (
            <>
              <h2 className="text-green-600 font-bold">Valid Certificate</h2>
              <p>Name: {result.name}</p>
              <p>Course: {result.course}</p>
              <p>Date: {result.issuedDate}</p>
            </>
          ) : (
            <p className="text-red-500">Invalid Certificate</p>
          )}
        </div>
      )}
    </div>
  );
}