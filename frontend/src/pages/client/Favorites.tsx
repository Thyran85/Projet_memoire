import { useState } from "react";
import RecipeCard from "../../components/client/RecipeCard";

const Favorites = () => {
  // Données simulées
  const [collections, setCollections] = useState<{
    [key: string]: { id: number; title: string; image: string; time: string; servings: number }[];
  }>({
    "Quick Meals": [
      { id: 1, title: "Creamy Salad", image: "salad.jpg", time: "15 min", servings: 2 },
    ],
    "Festive Desserts": [
      { id: 2, title: "Chocolate Cake", image: "cake.jpg", time: "1 hr", servings: 8 },
    ],
  });
  const [newCollection, setNewCollection] = useState("");

  const handleAddCollection = () => {
    if (newCollection.trim()) {
      setCollections({ ...collections, [newCollection]: [] });
      setNewCollection("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Favorites & Collections</h2>
      <div className="mb-6">
        <input
          type="text"
          value={newCollection}
          onChange={(e) => setNewCollection(e.target.value)}
          placeholder="New Collection Name"
          className="p-2 border border-gray-300 rounded-l-md"
        />
        <button
          onClick={handleAddCollection}
          className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
        >
          Add Collection
        </button>
      </div>
      {Object.keys(collections).map((collectionName) => (
        <div key={collectionName} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{collectionName}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections[collectionName].map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
          {collections[collectionName].length === 0 && (
            <p className="text-gray-600">No recipes in this collection yet.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Favorites;