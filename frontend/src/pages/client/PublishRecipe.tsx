const PublishRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState<string[]>([""]);

  const handleAddIngredient = () => setIngredients([...ingredients, ""]);
  const handleAddInstruction = () => setInstructions([...instructions, ""]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, ingredients, instructions });
    // Envoyer les données à l'API (à implémenter)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Publish a Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index] = e.target.value;
                setIngredients(newIngredients);
              }}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              placeholder={`Ingredient ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="mt-2 text-orange-500 hover:underline"
          >
            + Add Ingredient
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          {instructions.map((step, index) => (
            <input
              key={index}
              type="text"
              value={step}
              onChange={(e) => {
                const newInstructions = [...instructions];
                newInstructions[index] = e.target.value;
                setInstructions(newInstructions);
              }}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              placeholder={`Step ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={handleAddInstruction}
            className="mt-2 text-orange-500 hover:underline"
          >
            + Add Step
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Publish Recipe
        </button>
      </form>
    </div>
  );
};

export default PublishRecipe;