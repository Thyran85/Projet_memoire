interface NutritionalInfoProps {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const NutritionalInfo = ({ calories, protein, carbs, fat }: NutritionalInfoProps) => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Nutritional Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>Calories: {calories} kcal</p>
          <p>Protein: {protein}g</p>
        </div>
        <div>
          <p>Carbs: {carbs}g</p>
          <p>Fat: {fat}g</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionalInfo;