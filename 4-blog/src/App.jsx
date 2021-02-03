import React from 'react';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import axios from 'axios';
import AboutPage from './pages/AboutPage';
import Container from 'react-bootstrap/Container';

function App() {
  const [cards, setCards] = React.useState([]);

  const fetchPosts = async () => {
    await axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts`).then(({ data }) => {
      setCards(data);
    });
  };
  React.useEffect(() => {
    fetchPosts();
  }, []);

  const getPath = () => {
    const path = window.location.pathname;
    return path;
  };

  return (
    <div className="App">
      <Container>
        <Navigation />
        {getPath() === '/about' ? <AboutPage /> : <HomePage cards={cards} getPath={getPath} />}
      </Container>
    </div>
  );
}

export default App;
