import React from "react";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  return (
    <div className="app">
      <input type="text" placeholder="Search user..." name="" id="" />
      <UserList users={users} />
      <button>Add user</button>
    </div>
  );
}

export default App;
