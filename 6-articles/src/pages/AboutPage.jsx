import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigation from '../components/Navigation';

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <br />
      <Jumbotron>
        <h1>Добро пожаловать!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
      </Jumbotron>
    </div>
  );
};

export default AboutPage;
