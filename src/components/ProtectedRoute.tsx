import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const tfaVerified = sessionStorage.getItem("tfa_verified");

  if (!tfaVerified) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}
