import { useState } from "react";

const MealPlanner = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [plan, setPlan] = useState<{ day: string; recipe: string }[]>([
    { day: "Monday", recipe: "Creamy Salad" },
  ]);
  const [newDay, setNewDay] = useState("");
  const [newRecipe, setNewRecipe] = useState("");

  const handleAddMeal = () => {
    if (newDay && newRecipe) {
      setPlan([...plan, { day: newDay, recipe: newRecipe }]);
      setNewDay("");
      setNewRecipe("");
    }
  };

  const handleAutoPlan = () => {
    // Simuler une planification automatique
    const autoPlan = days.map((day) => ({
      day,
      recipe: day === "Monday" ? "Creamy Salad" : day === "Tuesday" ? "Tofu Tomato Soup" : "Crunchy Potatoes",
    }));
    setPlan(autoPlan);
  };

  const handleExport = () => {
    console.log("Exporting plan:", plan);
    // Implémenter l'exportation (PDF, email, etc.)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meal Planner</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="day" className="block text-sm font-medium text-gray-700">
              Day
            </label>
            <select
              id="day"
              value={newDay}
              onChange={(e) => setNewDay(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="recipe" className="block text-sm font-medium text-gray-700">
              Recipe
            </label>
            <input
              type="text"
              id="recipe"
              value={newRecipe}
              onChange={(e) => setNewRecipe(e.target.value)}
              placeholder="Enter recipe name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex space-x-4 mb-6">
          <button
            onClick={handleAddMeal}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Add Meal
          </button>
          <button
            onClick={handleAutoPlan}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Auto-Plan Week
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Day</th>
              <th className="p-4 text-left">Recipe</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => {
              const meal = plan.find((item) => item.day === day);
              return (
                <tr key={day} className="border-t">
                  <td className="p-4">{day}</td>
                  <td className="p-4">{meal ? meal.recipe : "No meal planned"}</td>
                  <td className="p-4 text-right">
                    {meal && (
                      <button
                        onClick={() =>
                          setPlan(plan.filter((item) => item.day !== day))
                        }
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleExport}
        className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
      >
        Export Plan
      </button>
    </div>
  );
};

export default MealPlanner;