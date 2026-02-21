import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user || user.rol !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
}