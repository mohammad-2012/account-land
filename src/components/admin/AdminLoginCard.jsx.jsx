import AdminLoginHeader from "./AdminLoginHeader";
import AdminLoginForm from "./AdminLoginForm";

export default function AdminLoginCard({ onLogin, error }) {
  return (
    <div className="p-8 bg-white shadow-2xl dark:bg-gray-800 rounded-2xl w-96">
      <AdminLoginHeader />
      <AdminLoginForm onLogin={onLogin} error={error} />
    </div>
  );
}
