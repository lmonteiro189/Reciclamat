import React, { useState, useEffect } from 'react';
import './style.scss';
import { signOut } from '../../services/authentication';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (props && props.loggedUser) {
      const { _id } = props.loggedUser;
      setUserId(_id);
      console.log(_id);
    }
  }, [props]);

  const logout = () => {
    signOut()
      .then(() => {
        console.log('deslogou');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">RECICLAMAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href={`/profile/${userId}`}>Profile</Nav.Link>
            <Nav.Link href="/post/add">Create Post</Nav.Link>
            <Nav.Link href="/search">Search Materials</Nav.Link>
            <Nav.Link onClick={() => logout()}>Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
