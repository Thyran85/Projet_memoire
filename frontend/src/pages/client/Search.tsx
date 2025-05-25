import { useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/client/RecipeCard";

const Search = () => {
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [budget, setBudget] = useState("");
  const [diet, setDiet] = useState("");

  // Données simulées pour les résultats de recherche
  const searchResults = [
    { id: 1, title: "Creamy Salad", image: "salad.jpg", time: "15 min", servings: 2 },
    { id: 2, title: "Tofu Tomato Soup", image: "soup.jpg", time: "30 min", servings: 4 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ingredients, time, difficulty, budget, diet });
    // Effectuer une recherche via l'API (à implémenter)
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Advanced Search</h2>
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
              Ingredients
            </label>
            <input
              type="text"
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., tomato, cheese"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Preparation Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Any</option>
              <option value="15">Under 15 min</option>
              <option value="30">Under 30 min</option>
              <option value="60">Under 1 hour</option>
            </select>
          </div>
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
              Difficulty
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget
            </label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Any</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label htmlFor="diet" className="block text-sm font-medium text-gray-700">
              Diet Type
            </label>
            <select
              id="diet"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Any</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten-Free</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Search
        </button>
      </form>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Search Results</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {searchResults.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Search;