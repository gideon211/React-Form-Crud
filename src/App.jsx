import { useState } from "react";
import Form from "./components/form";
import List from "./components/userList";

const App = () => {
  
  const students = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com"
    },
    {
      name: "Jane Smith",
      email: "janesmith@gmail.com"
    }
  ];

  const [users, setUsers] = useState(students);

  const addUser = (user) => {
    setUsers([...users, user]); 
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Form addUser={addUser} /> 
      <List users={users} />    
    </div>
  );
};

export default App;

