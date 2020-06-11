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
          <button><Link to="/signup">Sign Up</Link></button>
          <div className="black-image"></div>
        </div>
        <section className="info-section">
          <div className="info-box">
            <FaPalette className="icon" />
            <p>Encontre pessoas que trabalham com materiais recicláveis</p>
          </div>
          <div className="info-box">
            <FaRecycle className="icon" />
            <p>Recicle seu material doando-os a quem os utiliza</p>
          </div>
          <div className="info-box">
            <FaTree className="icon" />
            <p>Localize ecopontos para descarte</p>
          </div>
        </section>
        <hr />
        <section className="social-section">
          <h3>
            Conheça o trabalho incrível de artesãos que utilizam materiais
            recicláveis!
          </h3>
          <div className="image-cards">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1544955404-085f528bc52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1534769549239-a38ef6ace900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
        <footer>@copyright</footer>
    </div>
  );
};

export default LandingPage;
