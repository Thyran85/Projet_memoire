interface CookingModeProps {
  instructions: string[];
  onExit: () => void;
}

const CookingMode = ({ instructions, onExit }: CookingModeProps) => {
  return (
    <div className="fixed inset-0 bg-black text-white p-6 flex flex-col">
      <button onClick={onExit} className="self-end text-orange-500 mb-4">
        Exit Cooking Mode
      </button>
      <h2 className="text-2xl font-semibold mb-6">Cooking Mode</h2>
      <ol className="list-decimal pl-5 space-y-4">
        {instructions.map((step, index) => (
          <li key={index} className="text-lg">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default CookingMode;