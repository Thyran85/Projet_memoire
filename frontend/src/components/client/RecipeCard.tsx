import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  time: string;
  servings: number;
}

const RecipeCard = ({ id, title, image, time, servings }: RecipeCardProps) => {
  return (
    <Link to={`/client/recipe/${id}`} className="block bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{time}</span>
          <span>{servings} Servings</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;