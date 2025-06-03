import { useState } from "react";
import Form from "./components/form";
import List from "./components/userList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // For edit mode

  const addUser = (user) => {
    if (editingUser) {
      // Update existing user
      const updatedUsers = users.map((u) =>
        u.email === editingUser.email ? user : u
      );
      setUsers(updatedUsers);
      setEditingUser(null); // Exit edit mode
    } else {
      // Add new user
      setUsers([...users, user]);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (userToDelete) => {
    const filteredUsers = users.filter((u) => u.email !== userToDelete.email);
    setUsers(filteredUsers);
    // If user being edited is deleted
    if (editingUser && editingUser.email === userToDelete.email) {
      setEditingUser(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Form addUser={addUser} editingUser={editingUser} />
      <List users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
