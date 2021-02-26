import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { StateContext } from '../App';

const ArticleModal = ({ show, onClose }) => {
  const [state, dispatch] = React.useContext(StateContext);
  const [data, setData] = React.useState({
    title: '',
    text: '',
    image: '',
  });
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onAddArticle = async () => {
    await axios.post(`https://5c3755177820ff0014d92711.mockapi.io/articles`);
    dispatch({
      type: 'ADD_ARTICLE',
      payload: data,
    });
  };

  const onClickAdd = () => {
    if (onAddArticle) {
      console.log(data);
      onAddArticle(data);
    }
    setData({
      title: '',
      text: '',
      image: '',
    });
  };
  return (
    <div>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding an article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeInput}
                name="title"
                value={data.title}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeInput}
                name="image"
                value={data.image}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={handleChangeInput}
                name="text"
                value={data.text}
                rows={5}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="success" onClick={onClickAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArticleModal;
