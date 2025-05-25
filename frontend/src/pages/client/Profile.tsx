import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { logout } = useAuth();
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Mettre à jour les informations via l'API (à implémenter)
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Update Profile
        </button>
      </form>
      <button
        onClick={logout}
        className="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;