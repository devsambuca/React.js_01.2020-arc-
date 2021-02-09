import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Comment from '../components/Comment';

const FullPostPage = (props) => {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const postId = props.match.params.id;

  const fetchPost = async () => {
    const { data } = await axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${postId}`);
    setLoading(true);
    setPost(data);
  };
  const fetchComments = async () => {
    const { data } = await axios.get(
      `https://5c3755177820ff0014d92711.mockapi.io/posts/${postId}/comments`,
    );
    setLoading(true);

    setComments(data);
  };

  React.useEffect(() => {
    fetchPost();
    fetchComments();
    setLoading(false);
  }, []);

  if (!loading) {
    return <h2>Downloading content...</h2>;
  }
  return (
    <div>
      <a href="/" className="">
        <button className="btn btn-primary">Back</button>
      </a>
      <Card
        id={postId}
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
