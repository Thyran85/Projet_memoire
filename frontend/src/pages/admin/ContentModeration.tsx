import { useState } from "react";
import Table from "../../components/admin/Table";

const ContentModeration = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Creamy Salad", author: "User1", status: "Pending" },
    { id: 2, title: "Spicy Pasta", author: "User3", status: "Pending" },
  ]);

  const handleApprove = (id: number) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, status: "Approved" } : recipe
      )
    );
  };

  const handleReject = (id: number) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, status: "Rejected" } : recipe
      )
    );
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-600 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin/dashboard" className="block py-2 px-4 hover:bg-green-700 rounded">
            Dashboard
          </a>
          <a href="/admin/categories" className="block py-2 px-4 hover:bg-green-700 rounded">
            Categories
          </a>
          <a href="/admin/recipes" className="block py-2 px-4 hover:bg-green-700 rounded">
            Recipes
          </a>
          <a href="/admin/users" className="block py-2 px-4 hover:bg-green-700 rounded">
            Users
          </a>
          <a href="/admin/admins" className="block py-2 px-4 hover:bg-green-700 rounded">
            Admins
          </a>
          <a href="/admin/content-moderation" className="block py-2 px-4 bg-green-700 rounded">
            Content Moderation
          </a>
          <a href="/admin/account-settings" className="block py-2 px-4 hover:bg-green-700 rounded">
            Account Settings
          </a>
          <a href="/admin/nutritional-stats" className="block py-2 px-4 hover:bg-green-700 rounded">
            Nutritional Stats
          </a>
          <a href="/admin/search-filters" className="block py-2 px-4 hover:bg-green-700 rounded">
            Search Filters
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Content Moderation</h2>
        <Table
          headers={["ID", "Title", "Author", "Status", "Actions"]}
          data={recipes.map((recipe) => ({
            ID: recipe.id,
            Title: recipe.title,
            Author: recipe.author,
            Status: recipe.status,
            Actions: (
              <div className="flex space-x-2">
                {recipe.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleApprove(recipe.id)}
                      className="text-green-500 hover:underline"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(recipe.id)}
                      className="text-red-500 hover:underline"
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            ),
          }))}
        />
      </main>
    </div>
  );
};

export default ContentModeration;