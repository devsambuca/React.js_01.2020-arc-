import React from 'react';

const Card = (props) => {
  return (
    <div className="mt-4 card">
      <img src={props.image} alt="" className="card-img-top" />
      <div className="card-body">
        <div className="card-title h5">
          <a href={`/posts/${props.id}`}> {props.title}</a>
        </div>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.date}</small>
      </div>
    </div>
  );
};

export default Card;
