import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ArticleModal = ({ show, onClose, onAddArticle }) => {
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

  const onClickAdd = () => {
    if (onAddArticle) {
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
