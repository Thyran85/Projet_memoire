import { Link } from "react-router-dom";
import RecipeCard from "../../components/client/RecipeCard";

const Home = () => {
  const popularRecipes = [
    { id: 1, title: "Creamy Salad", image: "salad.jpg", time: "15 min", servings: 2 },
    { id: 2, title: "Tofu Tomato Soup", image: "soup.jpg", time: "30 min", servings: 4 },
    { id: 3, title: "Crunchy Potatoes", image: "potatoes.jpg", time: "45 min", servings: 3 },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Recipedia</h1>
          <div className="space-x-4">
            <Link to="/client" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link to="/client/categories" className="text-gray-600 hover:text-green-600">
              Categories
            </Link>
            <Link to="/client/search" className="text-gray-600 hover:text-green-600">
              Search
            </Link>
            <Link to="/client/profile" className="text-gray-600 hover:text-green-600">
              Profile
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover mouth-watering recipes tailored to your taste!
          </p>
          <Link
            to="/client/search"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600"
          >
            Explore Recipes
          </Link>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Discover, Create, Share - Check our popular recipes this week
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link to="/client/recipes/popular" className="text-orange-500 hover:underline">
            See All
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h3>
        <p className="text-gray-600 mb-6">
          Recipes the heart of culinary experiences with you, providing delightful dining moments.
        </p>
        <Link
          to="/client/about"
          className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        >
          Learn More
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="text-lg font-semibold">Recipedia</h4>
            <p className="mt-2">Categories | Menu | Lunch | Dinner | Social</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold">Sign up for our newsletter</h4>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md text-gray-800"
              />
              <button className="px-4 py-2 bg-orange-500 rounded-r-md">Submit</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;