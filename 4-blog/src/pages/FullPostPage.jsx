import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Comment from '../components/Comment';
import Navigation from '../components/Navigation';

const FullPostPage = ({ postId }) => {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const fetchPost = async () => {
    await axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${postId}`)
      .then(({ data }) => {
        console.log(data);
        setPost(data);
      });
  };
  const fetchComments = async () => {
    await axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${postId}/comments`)
      .then(({ data }) => {
        console.log(data);
        setComments(data);
      });
  };
  React.useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <div>
      <a href="/" className="">
        <button className="btn btn-primary">Back</button>
      </a>
      <Card
        key={post.id}
        image={post.image}
        title={post.title}
        text={post.text}
        date={post.createdAt}
      />
      <h3 className="mb-3 mt-4">Comments:</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} author={comment.name} text={comment.text} />
      ))}
    </div>
  );
};

export default FullPostPage;
