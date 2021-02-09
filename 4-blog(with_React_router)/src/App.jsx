import React from 'react';
import HomePage from './pages/HomePage';
import axios from 'axios';
import AboutPage from './pages/AboutPage';
import Container from 'react-bootstrap/Container';
import FullPostPage from './pages/FullPostPage';
import { Route } from 'react-router-dom';

function App() {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts`);
    setPosts(data);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      <Container>
        <Route exact path="/">
          <HomePage posts={posts} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/posts/:id" component={FullPostPage}></Route>
      </Container>
    </div>
  );
}

export default App;
