import { useState } from "react";

const SearchFilters = () => {
  const [filters, setFilters] = useState({
    ingredients: ["Tomato", "Cheese"],
    timeOptions: ["15 min", "30 min", "1 hour"],
    difficultyLevels: ["Easy", "Medium", "Hard"],
    dietTypes: ["Vegetarian", "Vegan", "Gluten-Free"],
  });

  const [newIngredient, setNewIngredient] = useState("");
  const [newTimeOption, setNewTimeOption] = useState("");
  const [newDifficultyLevel, setNewDifficultyLevel] = useState("");
  const [newDietType, setNewDietType] = useState("");

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setFilters({ ...filters, ingredients: [...filters.ingredients, newIngredient] });
      setNewIngredient("");
    }
  };

  const handleAddTimeOption = () => {
    if (newTimeOption.trim()) {
      setFilters({ ...filters, timeOptions: [...filters.timeOptions, newTimeOption] });
      setNewTimeOption("");
    }
  };

  const handleAddDifficultyLevel = () => {
    if (newDifficultyLevel.trim()) {
      setFilters({ ...filters, difficultyLevels: [...filters.difficultyLevels, newDifficultyLevel] });
      setNewDifficultyLevel("");
    }
  };

  const handleAddDietType = () => {
    if (newDietType.trim()) {
      setFilters({ ...filters, dietTypes: [...filters.dietTypes, newDietType] });
      setNewDietType("");
    }
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
          <a href="/admin/content-moderation" className="block py-2 px-4 hover:bg-green-700 rounded">
            Content Moderation
          </a>
          <a href="/admin/account-settings" className="block py-2 px-4 hover:bg-green-700 rounded">
            Account Settings
          </a>
          <a href="/admin/nutritional-stats" className="block py-2 px-4 hover:bg-green-700 rounded">
            Nutritional Stats
          </a>
          <a href="/admin/search-filters" className="block py-2 px-4 bg-green-700 rounded">
            Search Filters
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Search Filters</h2>
        <div className="space-y-8">
          {/* Ingredients */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredients</h3>
            <div className="flex mb-4">
              <input
                type="text"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Add new ingredient"
                className="p-2 border border-gray-300 rounded-l-md"
              />
              <button
                onClick={handleAddIngredient}
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
              >
                Add
              </button>
            </div>
            <ul className="list-disc pl-5">
              {filters.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Time Options */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Time Options</h3>
            <div className="flex mb-4">
              <input
                type="text"
                value={newTimeOption}
                onChange={(e) => setNewTimeOption(e.target.value)}
                placeholder="Add new time option"
                className="p-2 border border-gray-300 rounded-l-md"
              />
              <button
                onClick={handleAddTimeOption}
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
              >
                Add
              </button>
            </div>
            <ul className="list-disc pl-5">
              {filters.timeOptions.map((time, index) => (
                <li key={index} className="text-gray-600">{time}</li>
              ))}
            </ul>
          </div>

          {/* Difficulty Levels */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Difficulty Levels</h3>
            <div className="flex mb-4">
              <input
                type="text"
                value={newDifficultyLevel}
                onChange={(e) => setNewDifficultyLevel(e.target.value)}
                placeholder="Add new difficulty level"
                className="p-2 border border-gray-300 rounded-l-md"
              />
              <button
                onClick={handleAddDifficultyLevel}
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
              >
                Add
              </button>
            </div>
            <ul className="list-disc pl-5">
              {filters.difficultyLevels.map((level, index) => (
                <li key={index} className="text-gray-600">{level}</li>
              ))}
            </ul>
          </div>

          {/* Diet Types */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Diet Types</h3>
            <div className="flex mb-4">
              <input
                type="text"
                value={newDietType}
                onChange={(e) => setNewDietType(e.target.value)}
                placeholder="Add new diet type"
                className="p-2 border border-gray-300 rounded-l-md"
              />
              <button
                onClick={handleAddDietType}
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
              >
                Add
              </button>
            </div>
            <ul className="list-disc pl-5">
              {filters.dietTypes.map((diet, index) => (
                <li key={index} className="text-gray-600">{diet}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchFilters;