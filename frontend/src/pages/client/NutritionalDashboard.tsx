import { useState } from "react";

const NutritionalDashboard = () => {
  // Données simulées
  const [period, setPeriod] = useState<"day" | "week" | "month">("day");
  const nutritionalData = {
    day: { calories: 1800, protein: 80, carbs: 200, fat: 60 },
    week: { calories: 12600, protein: 560, carbs: 1400, fat: 420 },
    month: { calories: 54000, protein: 2400, carbs: 6000, fat: 1800 },
  };
  const mealHistory = [
    { date: "2025-05-23", recipe: "Creamy Salad", calories: 200 },
    { date: "2025-05-22", recipe: "Tofu Tomato Soup", calories: 300 },
  ];
  const tips = ["Increase protein intake with legumes.", "Add more fiber to your diet."];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nutritional Dashboard</h2>

      {/* Filtre de période */}
      <div className="mb-6">
        <label htmlFor="period" className="mr-2 text-sm font-medium text-gray-700">
          Period:
        </label>
        <select
          id="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value as "day" | "week" | "month")}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>

      {/* Résumé nutritionnel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Calories</h3>
          <p className="text-2xl font-bold text-green-600">{nutritionalData[period].calories} kcal</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Protein</h3>
          <p className="text-2xl font-bold text-green-600">{nutritionalData[period].protein}g</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Carbs</h3>
          <p className="text-2xl font-bold text-green-600">{nutritionalData[period].carbs}g</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Fat</h3>
          <p className="text-2xl font-bold text-green-600">{nutritionalData[period].fat}g</p>
        </div>
      </div>

      {/* Historique des repas */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Meal History</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Recipe</th>
              <th className="p-4 text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            {mealHistory.map((meal, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{meal.date}</td>
                <td className="p-4">{meal.recipe}</td>
                <td className="p-4">{meal.calories} kcal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conseils personnalisés */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Personalized Tips</h3>
        <ul className="list-disc pl-5">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-600">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NutritionalDashboard;