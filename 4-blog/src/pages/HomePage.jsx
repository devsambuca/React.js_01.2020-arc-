import React from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';

const HomePage = (props) => {
  return (
    <div>
      <Navigation />
      <div className="card-columns">
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
    </div>
  );
};

export default HomePage;
