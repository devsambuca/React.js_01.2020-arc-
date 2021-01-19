import axios from 'axios';
import React from 'react';
import User from './components/User';

function App() {
  const [users, setUsers] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/users?page=${page}&limit=10`)
      .then(({ data }) => {
        if (data.length) {
          setUsers((prevUsers) => [...prevUsers, ...data]);
          setLoading(true);
        } else {
          setPage(null);
        }
      });
    setLoading(false);
  }, [page]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search user..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul className="users">
        {users
          .filter((user) =>
            (user.name + ' ' + user.email).toLowerCase().includes(inputValue.toLowerCase()),
          )
          .map((user) => (
            <User key={user.id} email={user.email} name={user.name} />
          ))}
        {!loading && 'loading...'}
      </ul>
      {page && (
        <button className="button" onClick={() => setPage(page + 1)} disabled={!loading}>
          {loading ? 'Next 10 users' : 'Wait'}
        </button>
      )}
    </div>
  );
}

export default App;
