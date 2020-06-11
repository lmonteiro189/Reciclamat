import React from 'react';
import './style.scss';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">RECICLAMAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/profile/:id">Profile</Nav.Link>
            <Nav.Link href="/post/add">Create Post</Nav.Link>
            <Nav.Link href="/search">Search Materials</Nav.Link>
            <Nav.Link href="/">Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
