import { useState } from "react";

const ShoppingList = () => {
  // Données simulées
  const [items, setItems] = useState([
    { id: 1, name: "Lettuce", checked: false, recipe: "Creamy Salad" },
    { id: 2, name: "Tomato", checked: true, recipe: "Creamy Salad" },
    { id: 3, name: "Tofu", checked: false, recipe: "Tofu Tomato Soup" },
  ]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: items.length + 1, name: newItem, checked: false, recipe: "Manual" }]);
      setNewItem("");
    }
  };

  const handleToggleCheck = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shopping List</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add an item manually"
            className="flex-1 p-2 border border-gray-300 rounded-l-md"
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleToggleCheck(item.id)}
                  className="mr-2"
                />
                <span className={item.checked ? "line-through text-gray-500" : "text-gray-800"}>
                  {item.name}
                </span>
              </div>
              <span className="text-sm text-gray-500">From: {item.recipe}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Export List
      </button>
    </div>
  );
};

export default ShoppingList;