import { useParams } from "react-router-dom";
import RecipeCard from "../../components/client/RecipeCard";

const RecipeList = () => {
  const { category } = useParams<{ category: string }>();

  // Données simulées
  const recipes = [
    { id: 1, title: "Creamy Salad", image: "salad.jpg", time: "15 min", servings: 2 },
    { id: 2, title: "Tofu Tomato Soup", image: "soup.jpg", time: "30 min", servings: 4 },
    { id: 3, title: "Crunchy Potatoes", image: "potatoes.jpg", time: "45 min", servings: 3 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Recipes` : "Recipes"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;