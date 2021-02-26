import React from 'react';
import Card from 'react-bootstrap/Card';

const Article = (props) => {
  return (
    <Card className="mt-2">
      <Card.Img src={props.image} alt="" variant="top" />
      <Card.Body>
        <Card.Title>
          <Card.Link href={`/articles/${props.id}`}> {props.title}</Card.Link>
        </Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted small">{props.date}</Card.Footer>
    </Card>
  );
};

export default Article;
