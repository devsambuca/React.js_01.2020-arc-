import React from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';

const HomePage = (props) => {
  return (
    <div>
      <Navigation />
      <div className="card-columns">
        {props.posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            text={post.text}
            date={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
