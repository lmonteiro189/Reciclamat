import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      // console.log(_id);
    }
  }, [props]);

  const logout = () => {
    signOut()
      .then(() => {
        window.location.reload();
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
            <Nav.Link>
              <Link to="/posts">Posts</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/profile/${userId}`}>Profile</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/post/add">Create Post</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/search">Search Materials</Link>
            </Nav.Link>
            {props.loggedUser ? (
              <Nav.Link onClick={() => logout()}>Sign out</Nav.Link>
            ) : (
              <Nav.Link href="/signin">Sign in</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
