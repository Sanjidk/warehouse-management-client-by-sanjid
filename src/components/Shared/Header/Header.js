import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
    <Container>
      <Navbar.Brand className='fw-bold' as={Link} to="/"><span className='header-title'>LAPTOP</span> <span className='header-title2'>WareHousE</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto text-center fw-bold">
          <Nav.Link className='text-white header-compo' as={Link} to="/home">Home</Nav.Link>
          <Nav.Link className='text-white header-compo' as={Link} to="/items">Items</Nav.Link>
          <Nav.Link className='text-white header-compo' as={Link} to="/manageitems">Manage Items</Nav.Link>
          <Nav.Link className='text-white header-compo' as={Link} to="/additem">Add Item</Nav.Link>
          <Nav.Link className='text-white header-compo' as={Link} to="/myitems">My Items</Nav.Link>
          <Nav.Link className='text-white header-compo' as={Link} to="/blogs">Blogs</Nav.Link>
        </Nav>

        <Nav className="text-center fw-bold">
        <Nav.Link className='text-white header-compo' as={Link} to="/login">Login</Nav.Link>
        {/* <Nav.Link className='text-white header-compo' as={Link} to="/signup">Sign Up</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;