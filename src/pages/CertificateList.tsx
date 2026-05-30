import { useEffect, useState } from "react";

interface Certificate {
  id: string;
  name: string;
  course: string;
  issuedDate: string;
  certId: string;
}

export default function CertificateList() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch(
          "https://app-3rconxdx6q-uc.a.run.app/certificates"
        );

        const data = await res.json();
        setCertificates(data);
      } catch (err) {
        console.error("Error fetching certificates", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) return <p className="p-6">Loading certificates...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Certificate List</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-bule-600 rounded-xl shadow">
          <thead className="bg-destructive">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Issued Date</th>
            </tr>
          </thead>

          <tbody>
            {certificates.map((cert) => (
              <tr key={cert.id} className="border-t">
                <td className="p-3">{cert.name}</td>
                <td className="p-3">{cert.course}</td>
                <td className="p-3 font-mono">{cert.certId}</td>
                <td className="p-3">{cert.issuedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}