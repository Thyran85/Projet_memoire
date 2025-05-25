import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <Link to="/admin/dashboard" className="block py-2 px-4 hover:bg-green-700 rounded">
            Dashboard
          </Link>
          <Link to="/admin/categories" className="block py-2 px-4 hover:bg-green-700 rounded">
            Categories
          </Link>
          <Link to="/admin/recipes" className="block py-2 px-4 hover:bg-green-700 rounded">
            Recipes
          </Link>
          <Link to="/admin/users" className="block py-2 px-4 hover:bg-green-700 rounded">
            Users
          </Link>
          <Link to="/admin/admins" className="block py-2 px-4 hover:bg-green-700 rounded">
            Admins
          </Link>
          <Link to="/admin/content-moderation" className="block py-2 px-4 hover:bg-green-700 rounded">
            Content Moderation
          </Link>
          <Link to="/admin/account-settings" className="block py-2 px-4 hover:bg-green-700 rounded">
            Account Settings
          </Link>
          <Link to="/admin/nutritional-stats" className="block py-2 px-4 hover:bg-green-700 rounded">
            Nutritional Stats
          </Link>
          <Link to="/admin/search-filters" className="block py-2 px-4 hover:bg-green-700 rounded">
            Search Filters
          </Link>
          <button
            onClick={logout}
            className="w-full text-left py-2 px-4 hover:bg-red-600 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
            <p className="text-2xl font-bold text-green-600">1,234</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Recipes Published</h3>
            <p className="text-2xl font-bold text-green-600">567</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Engagement</h3>
            <p className="text-2xl font-bold text-green-600">89%</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;