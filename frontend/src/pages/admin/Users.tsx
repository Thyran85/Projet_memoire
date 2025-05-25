import { useState } from "react";
import Table from "../../components/admin/Table";
import FormModal from "../../components/admin/FormModal";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "User1", email: "user1@example.com", active: true },
    { id: 2, username: "User2", email: "user2@example.com", active: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleAdd = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSave = (data: any) => {
    if (selectedUser) {
      setUsers(
        users.map((user) => (user.id === selectedUser.id ? { ...user, ...data } : user))
      );
    } else {
      setUsers([...users, { id: users.length + 1, ...data, active: true }]);
    }
    setIsModalOpen(false);
  };

  const handleToggleActive = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
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
          <a href="/admin/users" className="block py-2 px-4 bg-green-700 rounded">
            Users
          </a>
          <a href="/admin/admins" className="block py-2 px-4 hover:bg-green-700 rounded">
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Users</h2>
        <button
          onClick={handleAdd}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add User
        </button>
        <Table
          headers={["ID", "Username", "Email", "Status", "Actions"]}
          data={users.map((user) => ({
            ID: user.id,
            Username: user.username,
            Email: user.email,
            Status: user.active ? "Active" : "Inactive",
            Actions: (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggleActive(user.id)}
                  className={`${
                    user.active ? "text-red-500" : "text-green-500"
                  } hover:underline`}
                >
                  {user.active ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
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
            title={selectedUser ? "Edit User" : "Add User"}
            fields={[
              { name: "username", label: "Username", type: "text", value: selectedUser?.username || "" },
              { name: "email", label: "Email", type: "email", value: selectedUser?.email || "" },
            ]}
            onSave={handleSave}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Users;