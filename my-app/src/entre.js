import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backImage from './photo/back.png';
import logo from './logo.PNG';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LandingPage() {
  const [modalShow, setModalShow] = useState(false);
  const [pseudo, setPseudo] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to '/jeu'
    navigate('/jeu');
  };

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the pseudo, like storing it in state or submitting it to a server
    console.log('Pseudo:', pseudo);
    handleContinue();
  };

  return (
<div className="landing-page" style={{ backgroundColor: '#000b2e', color: '#ffffff', display: 'flex',alignItems: 'center' }}>
 <nav>
  <div style={{ flex: '1' }}>
    <img src={logo} alt="Example" style={{ height: 80, width: 250 }} />
  </div>
    <ul id="navbar"> 
      <li><a href="#" >Home</a></li>
      <li><a href="#">about </a></li>
      <li ><a href="#" >parameter</a></li>
      <li ><a href="#" >join</a></li>
    </ul>
  </nav>
    <div className='home-text'>
      <h1 className='primary-heading'> WELCOME </h1>
      <h1 className='primary-heading'> TO THE GAME</h1>
      <Button  className='primary-button' variant="dark" onClick={() => setModalShow(true)}>Jouer</Button>
    </div> 
      <img id='BackGrnd' src={backImage} alt="Example" />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ maxWidth: '400px', margin: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Entrer un pseudo pour continuer  ...
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="pseudo"
                  autoFocus
                  value={pseudo}
                  onChange={handlePseudoChange}
                />
              </Form.Group>
              <Modal.Footer>
                <Button type="submit">Continuer</Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default LandingPage;
