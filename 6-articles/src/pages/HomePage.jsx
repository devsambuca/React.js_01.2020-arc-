import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ArticleModal from '../components/ArticleModal';
import Article from '../components/Card';
import Navigation from '../components/Navigation';
import { StateContext } from '../App';

const HomePage = () => {
  const [state, dispatch] = React.useContext(StateContext);

  const fetchArticles = async () => {
    const { data } = await axios.get(`https://5c3755177820ff0014d92711.mockapi.io/articles`);
    dispatch({ type: 'GET_ARTICLES', payload: data });
  };

  const addArticle = async () => {
    const { data } = await axios.post(`https://5c3755177820ff0014d92711.mockapi.io/articles`);
    dispatch({
      type: 'ADD_ARTICLE',
      payload: data,
    });
  };

  React.useEffect(() => {
    fetchArticles();
  }, []);

  const handleClose = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };

  const handleShow = () => {
    dispatch({
      type: 'OPEN_MODAL',
    });
  };
  const onAddArticle = (data) => {
    dispatch({
      type: 'ADD_ARTICLE',
      payload: data,
    });
  };

  return (
    <div>
      <Navigation />
      <Button onClick={handleShow}>Add article</Button>
      <ArticleModal show={state.visibleModal} onClose={handleClose} onAddArticle={onAddArticle} />
      <div className="card-columns">
        {state.articles.map((article) => (
          <Article
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            text={article.text}
            date={article.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
