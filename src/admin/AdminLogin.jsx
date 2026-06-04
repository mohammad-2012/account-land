import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import AdminLoginCard from "../components/admin/AdminLoginCard.jsx";

export default function AdminLogin() {
  const { adminLogin } = useAdmin();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (username, password) => {
    if (adminLogin(username, password)) {
      navigate("/admin");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <AdminLoginCard onLogin={handleLogin} error={error} />
    </div>
  );
}
