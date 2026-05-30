import { Link } from "react-router-dom";

export default function Certificates() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Certificates</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/dashboard/certificate-list"
          className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700"
        >
          View Certificates
        </Link>

        <Link
          to="/dashboard/verify"
          className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700"
        >
          Verify Certificate
        </Link>
      </div>
    </div>
  );
}