import React from 'react';

const Comment = (props) => {
  return (
    <div className="mb-4 card">
      <div className="card-body">
        <div className="mb-2 card-subtitle h6">{props.author}</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Comment;
