import CategoryCard from "../../components/client/CategoryCard";

const Categories = () => {
  const categories = [
    { name: "Vegetarian", image: "vegetarian.jpg" },
    { name: "Desserts", image: "desserts.jpg" },
    { name: "Italian", image: "italian.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Browse Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} name={category.name} image={category.image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;