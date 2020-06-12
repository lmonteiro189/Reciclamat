import React from 'react';
import './style.scss';
import { FaTree, FaPalette, FaRecycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="hero">
        <h1>DON’T throw it out, RECYCLE it!</h1>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
        <div className="black-image"></div>
      </div>
      <section className="info-section">
        <div className="info-box">
          <FaPalette className="icon" />
          <p>Find people who work with recycled materials</p>
        </div>
        <div className="info-box">
          <FaRecycle className="icon" />
          <p>Recycle your materials by giving them to those who reuse them</p>
        </div>
        <div className="info-box">
          <FaTree className="icon" />
          <p>Find recycling stations</p>
        </div>
      </section>
      <hr />
      <section className="social-section">
        <h3>Discover how people use these materials to make incredible products!</h3>
        <div className="image-cards">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            />
            <Card.Body>
              <Card.Text>
                Find out about people who make functional, stylish, and Earth-friendly products.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1544955404-085f528bc52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            />
            <Card.Body>
              <Card.Text>Shop local and support small businesses.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1534769549239-a38ef6ace900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            />
            <Card.Body>
              <Card.Text>Reduce waste and help make your city more sustainable.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
      <footer>@copyright</footer>
    </div>
  );
};

export default LandingPage;
