import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SecureDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [certCount, setCertCount] = useState(0);
  const [verifyCount, setVerifyCount] = useState(0);

  const API = "https://app-3rconxdx6q-uc.a.run.app";

  const handleLogout = () => {
    sessionStorage.removeItem("tfa_verified");
    window.location.href = "/admin-login";
  };

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch(`${API}/certificates`);
        const data = await res.json();

        setCertCount(data.length);

        // optional: if you track verification logs
        const verifyRes = await fetch(`${API}/certificates/verifications`);
        const verifyData = await verifyRes.json();

        setVerifyCount(verifyData.count || 0);

      } catch (err) {
        console.error("Dashboard stats error:", err);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="min-h-screen bg-blue-200 flex">

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-black text-white p-6 transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-10">Dev Innovations Labs</h2>

        <nav className="space-y-3">
          <Link to="/secure-dashboard" className="block hover:bg-gray-800 p-3 rounded-lg">
            Dashboard
          </Link>

          <Link to="/dashboard/certificates" className="block hover:bg-gray-800 p-3 rounded-lg">
            Generate Certificate
          </Link>

          <Link to="/dashboard/certificate-list" className="block hover:bg-gray-800 p-3 rounded-lg">
            Certificates
          </Link>

          <Link to="/dashboard/verify" className="block hover:bg-gray-800 p-3 rounded-lg">
            Verify Certificate
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col bg-blue-200">

        <header className="bg-black shadow px-6 py-4 flex justify-between items-center">

          <button
            className="md:hidden text-xl text-white"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-xl text-white font-bold">Admin Dashboard</h1>

          <div className="text-gray-300 text-sm">
            Secure Panel
          </div>
        </header>

        <main className="p-6">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-black text-white p-6 rounded-xl shadow">
              <h3 className="text-gray-400">Certificates Issued</h3>
              <p className="text-3xl font-bold mt-2">{certCount}</p>
            </div>

            <div className="bg-black text-white p-6 rounded-xl shadow">
              <h3 className="text-gray-400">Templates</h3>
              <p className="text-3xl font-bold mt-2">1</p>
            </div>

            <div className="bg-black text-white p-6 rounded-xl shadow">
              <h3 className="text-gray-400">Verifications</h3>
              <p className="text-3xl font-bold mt-2">{verifyCount}</p>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Link
                to="/dashboard/certificates"
                className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl shadow"
              >
                Generate New Certificate
              </Link>

              <Link
                to="/dashboard/certificate-list"
                className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl shadow"
              >
                View Certificates
              </Link>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}