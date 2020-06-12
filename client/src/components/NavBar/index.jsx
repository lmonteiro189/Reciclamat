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
            {props.loggedUser ? (
              <>
                <Nav.Link eventKey="/posts" as={Link} to="/posts">
                  Posts
                </Nav.Link>
                <Nav.Link eventKey="/post/add" as={Link} to="/post/add">
                  Create Post
                </Nav.Link>
                <Nav.Link eventKey="/search" as={Link} to="/search">
                  Search Materials
                </Nav.Link>
                <Nav.Link
                  eventKey={`/profile/${userId}`}
                  as={Link}
                  to={`/profile/${userId}`}
                >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={() => logout()}>Sign out</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link eventKey="/posts" as={Link} to="/posts">
                  Posts
                </Nav.Link>
                <Nav.Link eventKey="/search" as={Link} to="/search">
                  Search Materials
                </Nav.Link>
                <Nav.Link eventKey="/signin" as={Link} to="/signin">
                  Sign in
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
