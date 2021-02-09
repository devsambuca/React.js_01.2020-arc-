import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [inputValue, setInputValue] = React.useState('');
  const path = window.location.pathname;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My blog</Navbar.Brand>
        <Nav className="mr-auto" defaultActiveKey={path}>
          <Link to="/" className="nav-link active">
            Main
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Input article..."
            className="mr-sm-2 form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button>Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navigation;
