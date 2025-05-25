import { useState } from "react";
import Table from "../../components/admin/Table";
import FormModal from "../../components/admin/FormModal";

const Recipes = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Creamy Salad", author: "User1", status: "Pending" },
    { id: 2, title: "Tofu Tomato Soup", author: "User2", status: "Published" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const handleAdd = () => {
    setSelectedRecipe(null);
    setIsModalOpen(true);
  };

  const handleEdit = (recipe: any) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handleSave = (data: any) => {
    if (selectedRecipe) {
      // Mise à jour
      setRecipes(
        recipes.map((recipe) =>
          recipe.id === selectedRecipe.id ? { ...recipe, ...data } : recipe
        )
      );
    } else {
      // Ajout
      setRecipes([...recipes, { id: recipes.length + 1, ...data, status: "Pending" }]);
    }
    setIsModalOpen(false);
  };

  const handlePublish = (id: number) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, status: "Published" } : recipe
      )
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin/dashboard" className="block py-2 px-4 hover:bg-green-700 rounded">
            Dashboard
          </a>
          <a href="/admin/categories" className="block py-2 px-4 hover:bg-green-700 rounded">
            Categories
          </a>
          <a href="/admin/recipes" className="block py-2 px-4 bg-green-700 rounded">
            Recipes
          </a>
          <a href="/admin/users" className="block py-2 px-4 hover:bg-green-700 rounded">
            Users
          </a>
          <a href="/admin/admins" className="block py-2 px-4 hover:bg-green-700 rounded">
            Admins
          </a>
          <a href="/admin/content-moderation" className="block py-2 px-4 hover:bg-green-700 rounded">
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

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Recipes</h2>
        <button
          onClick={handleAdd}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add Recipe
        </button>
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
                  <button
                    onClick={() => handlePublish(recipe.id)}
                    className="text-green-500 hover:underline"
                  >
                    Publish
                  </button>
                )}
                <button
                  onClick={() => handleEdit(recipe)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(recipe.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            ),
          }))}
        />
        {isModalOpen && (
          <FormModal
            title={selectedRecipe ? "Edit Recipe" : "Add Recipe"}
            fields={[
              { name: "title", label: "Title", type: "text", value: selectedRecipe?.title || "" },
              { name: "author", label: "Author", type: "text", value: selectedRecipe?.author || "" },
            ]}
            onSave={handleSave}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Recipes;