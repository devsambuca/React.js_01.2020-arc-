import React from 'react';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import axios from 'axios';
import AboutPage from './pages/AboutPage';
import Container from 'react-bootstrap/Container';
import FullPostPage from './pages/FullPostPage';

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

  const path = window.location.pathname;

  const myPar = (path) => {
    const postId = path.split('/')[2];
    switch (path) {
      case '/about':
        return <AboutPage />;
      case `/posts/${postId}`:
        return <FullPostPage postId={postId} />;
      default:
        return <HomePage cards={cards} />;
    }
  };
  return (
    <div className="App">
      <br></br>
      <br></br>
      <Container>{myPar(path)}</Container>
    </div>
  );
}

export default App;
