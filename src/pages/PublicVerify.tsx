import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PublicVerify() {
  const { certId } = useParams();
  const [certificate, setCertificate] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCertificate = async () => {
      try {
        const res = await fetch(
          `https://app-3rconxdx6q-uc.a.run.app/certificates/verify?code=${certId}`
        );

        const data = await res.json();
        setCertificate(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    verifyCertificate();
  }, [certId]);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Checking certificate...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-[#0a1628] p-8 rounded-xl shadow max-w-md w-full">

        {certificate?.valid ? (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-4">
              Certificate Verified
            </h1>

            <p><strong>Name:</strong> {certificate.name}</p>
            <p><strong>Course:</strong> {certificate.course}</p>
            <p><strong>Issued Date:</strong> {certificate.issuedDate}</p>
            <p className="mt-4 text-gray-500 text-sm">
              Certificate ID: {certId}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Invalid Certificate
            </h1>

            <p>This certificate could not be verified.</p>
          </>
        )}

      </div>
    </div>
  );
}