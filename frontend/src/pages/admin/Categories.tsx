import { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Vegetarian" },
    { id: 2, name: "Italian" },
  ]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
    setNewCategory("");
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-600 text-white p-4">
        {/* Sidebar (peut être extrait dans un composant) */}
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin/dashboard" className="block py-2 px-4 hover:bg-green-700 rounded">
            Dashboard
          </a>
          <a href="/admin/categories" className="block py-2 px-4 bg-green-700 rounded">
            Categories
          </a>
          {/* Ajouter les autres liens */}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Categories</h2>
        <div className="mb-6">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New Category"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddCategory}
            className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Add
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-t">
                  <td className="p-4">{category.id}</td>
                  <td className="p-4">{category.name}</td>
                  <td className="p-4 text-right">
                    <button className="text-blue-500 mr-2">Edit</button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Categories;