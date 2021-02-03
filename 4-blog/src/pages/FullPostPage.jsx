import React from 'react';
import Card from '../components/Card';
import axios from 'axios';

const FullPostPage = (props) => {
  const [cards, setCards] = React.useState([]);
  const postId = props.match.param.id;

  const fetchPosts = async () => {
    await axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${postId}`)
      .then(({ data }) => {
        console.log(postId);
        setCards(data);
      });
  };
  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <a href="/" className="">
        <button className="btn btn-primary">Back</button>
      </a>
      {cards ? cards.map((card) => <Card key={card.id} />) : <div>Loading...</div>}
    </div>
  );
};

export default FullPostPage;
