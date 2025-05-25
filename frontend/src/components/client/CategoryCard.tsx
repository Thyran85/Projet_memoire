import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
}

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <Link
      to={`/client/recipes/${name.toLowerCase()}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 text-center">
          {name}
        </h4>
      </div>
    </Link>
  );
};

export default CategoryCard;