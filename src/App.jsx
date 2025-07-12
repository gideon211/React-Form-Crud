import { useState } from "react";
import Form from "./components/form";
import List from "./components/userList";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [users, setUsers] = useState([
    { name: "John Doe", email: "john1@gmail.com", id: uuidv4() },
    { name: "Jane Doe", email: "jane2@gmail.com", id: uuidv4() },
    { name: "Jim Doe", email: "jim3@gmail.com", id: uuidv4() },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    if (editingUser) {
      // Update existing user by ID
      const updatedUsers = users.map((u) =>
        u.id === editingUser.id ? { ...user, id: editingUser.id } : u
      );
      setUsers(updatedUsers);
      console.log("User updated:", { ...user, id: editingUser.id }); // ✅ log
      setEditingUser(null);
    } else {
      // Add new user
      const newUser = { ...user, id: uuidv4() };
      setUsers([...users, newUser]);
      console.log("New user added:", newUser); // ✅ log
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (userToDelete) => {
    const filteredUsers = users.filter((u) => u.id !== userToDelete.id);
    setUsers(filteredUsers);

    if (editingUser && editingUser.id === userToDelete.id) {
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

