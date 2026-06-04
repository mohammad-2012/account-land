import { useState } from "react";

export default function AdminLoginForm({ onLogin, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="p-3 mb-4 text-center text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">
          نام کاربری
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan dark:bg-gray-700 dark:border-gray-600"
          placeholder="modev2012"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">
          رمز عبور
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan dark:bg-gray-700 dark:border-gray-600"
          placeholder="••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 font-bold text-white transition rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90"
      >
        ورود به پنل
      </button>
    </form>
  );
}
