import React from 'react';
import Card from '../components/Card';

const HomePage = (props) => {
  return (
    <div className="mt-4 card-columns">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.title}
          text={card.text}
          date={card.createdAt}
        />
      ))}
    </div>
  );
};

export default HomePage;
