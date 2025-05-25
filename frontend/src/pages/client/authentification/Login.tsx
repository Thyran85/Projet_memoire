import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simuler une requête API (à implémenter avec le backend)
      console.log("Client login:", { email, password });
      login("client"); // Simuler une connexion réussie
      navigate("/client/profile");
    } catch (err) {
      setError("Identifiants incorrects");
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implémenter la connexion via réseaux sociaux (ex. Google, Facebook) avec une bibliothèque comme Firebase
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Or login with:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Google
            </button>
            <button
              onClick={() => handleSocialLogin("Facebook")}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Facebook
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/client/register" className="text-orange-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;