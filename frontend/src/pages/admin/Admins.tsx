import { useState } from "react";
import Table from "../../components/admin/Table";
import FormModal from "../../components/admin/FormModal";

const Admins = () => {
  const [admins, setAdmins] = useState([
    { id: 1, username: "Admin1", email: "admin1@example.com", role: "Super Admin" },
    { id: 2, username: "Admin2", email: "admin2@example.com", role: "Moderator" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<any>(null);

  const handleAdd = () => {
    setSelectedAdmin(null);
    setIsModalOpen(true);
  };

  const handleEdit = (admin: any) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  const handleSave = (data: any) => {
    if (selectedAdmin) {
      setAdmins(
        admins.map((admin) => (admin.id === selectedAdmin.id ? { ...admin, ...data } : admin))
      );
    } else {
      setAdmins([...admins, { id: admins.length + 1, ...data, role: data.role || "Moderator" }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-600 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin/dashboard" className="block py-2 px-4 hover:bg-green-700 rounded">
            Dashboard
          </a>
          <a href="/admin/categories" className="block py-2 px-4 hover:bg-green-700 rounded">
            Categories
          </a>
          <a href="/admin/recipes" className="block py-2 px-4 hover:bg-green-700 rounded">
            Recipes
          </a>
          <a href="/admin/users" className="block py-2 px-4 hover:bg-green-700 rounded">
            Users
          </a>
          <a href="/admin/admins" className="block py-2 px-4 bg-green-700 rounded">
            Admins
          </a>
          <a href="/admin/content-moderation" className="block py-2 px-4 hover:bg-green-700 rounded">
            Content Moderation
          </a>
          <a href="/admin/account-settings" className="block py-2 px-4 hover:bg-green-700 rounded">
            Account Settings
          </a>
          <a href="/admin/nutritional-stats" className="block py-2 px-4 hover:bg-green-700 rounded">
            Nutritional Stats
          </a>
          <a href="/admin/search-filters" className="block py-2 px-4 hover:bg-green-700 rounded">
            Search Filters
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Admins</h2>
        <button
          onClick={handleAdd}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add Admin
        </button>
        <Table
          headers={["ID", "Username", "Email", "Role", "Actions"]}
          data={admins.map((admin) => ({
            ID: admin.id,
            Username: admin.username,
            Email: admin.email,
            Role: admin.role,
            Actions: (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(admin)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(admin.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            ),
          }))}
        />
        {isModalOpen && (
          <FormModal
            title={selectedAdmin ? "Edit Admin" : "Add Admin"}
            fields={[
              { name: "username", label: "Username", type: "text", value: selectedAdmin?.username || "" },
              { name: "email", label: "Email", type: "email", value: selectedAdmin?.email || "" },
              {
                name: "role",
                label: "Role",
                type: "select",
                value: selectedAdmin?.role || "Moderator",
                options: [
                  { value: "Super Admin", label: "Super Admin" },
                  { value: "Moderator", label: "Moderator" },
                ],
              },
            ]}
            onSave={handleSave}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Admins;