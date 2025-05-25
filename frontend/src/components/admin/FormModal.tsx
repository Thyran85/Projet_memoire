import { useState, useEffect } from "react";

interface FormModalProps {
  title: string;
  fields: {
    name: string;
    label: string;
    type: "text" | "email" | "select";
    value: string;
    options?: { value: string; label: string }[];
  }[];
  onSave: (data: any) => void;
  onClose: () => void;
}

const FormModal = ({ title, fields, onSave, onClose }: FormModalProps) => {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const initialData = fields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {} as any);
    setFormData(initialData);
  }, [fields]);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                >
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                />
              )}
            </div>
          ))}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;