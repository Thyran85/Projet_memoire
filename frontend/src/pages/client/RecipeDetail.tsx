import { useParams } from "react-router-dom";
import { useState } from "react";
import ShareButton from "../../components/client/ShareButton";
import NutritionalInfo from "../../components/client/NutritionalInfo";
import CookingMode from "../../components/client/CookingMode";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isCookingMode, setIsCookingMode] = useState(false);

  // Données simulées
  const recipe = {
    id: parseInt(id || "1"),
    title: "Creamy Salad",
    image: "salad.jpg",
    time: "15 min",
    servings: 2,
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive Oil"],
    instructions: ["Chop vegetables", "Mix with olive oil", "Serve fresh"],
    nutritionalInfo: { calories: 200, protein: 5, carbs: 10, fat: 15 },
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isCookingMode ? "bg-black text-white" : ""}`}>
      {isCookingMode ? (
        <CookingMode
          instructions={recipe.instructions}
          onExit={() => setIsCookingMode(false)}
        />
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600">
              <span>{recipe.time} | </span>
              <span>{recipe.servings} Servings</span>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => setIsCookingMode(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Cooking Mode
              </button>
              <ShareButton recipeId={recipe.id} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h3>
              <ul className="list-disc pl-5">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
              <ol className="list-decimal pl-5">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-gray-600">{step}</li>
                ))}
              </ol>
            </div>
          </div>
          <NutritionalInfo {...recipe.nutritionalInfo} />
        </>
      )}
    </div>
  );
};

export default RecipeDetail;