import React from 'react'
import  { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { assets } from '../../assets/assets'
import "./Login.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Regmodal from '../../Components/Regmodal';

const Login = () => {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
  
    const handleGoogleLogin = (response) => {
      // Access user profile information from response
      const profile = response.profileObj;
      console.log(profile); // Example: access user email
      // Send user profile information to your server for authentication
      navigate('/home')
    };
  
    const handleGoogleLoginError = (error) => {
      console.error(error);
    };
  
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    return (
     
    <div>

    <div className='logo-container'> 
       <img src={assets.logo} className='logo' alt="" />
    </div>

      <div className='maindiv' >
        
        <Container className='maincontainer'>
          <Row >
  
  
            <Col lg={6}>
  
              <div className='text-center'>
                <h1 className="fw-bold ms-5  heading">Sign in to</h1>
                <h3 className="ms-5" >Lorem ipsum is simply</h3>
                <p className="mt-5 ms-5 fs-5">
                  If you don't have an account, you can <a href="#" onClick={handleModalShow} style={{ textDecoration: "none", color: '#FE0C00' }}  >register here!</a>
                </p>
    
                <div className='content-right'>
                  <img src={assets.foodreg} alt="" />
                </div>
    
              </div>
            </Col>
  
  
            <Col lg={6} >
  
              <div className='shadow-lg text-center p-3 mt-5 logindiv' >
                <FloatingLabel
                  controlId="floatingInputEmail"
                  label="Email address"
                  className="mb-3 mt-5 ms-5 me-5 "
                 
                >
                  <Form.Control type="email"
                    placeholder="name@example.com" />
                </FloatingLabel>
    
    
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className='mb-3 ms-5 me-5'
                >
                  <Form.Control type="password"
                    placeholder="Password" />
                </FloatingLabel>
    
                <div className='text-center'>
                  <Button className='logbtn mb-3' style={{ background: '#FE0C00', border: 'none' }}>
                    Login
                  </Button>
                </div>
    
                <p className='text-center mt-3 mx-auto'>or continue with</p>
    
    
                <div className="d-flex justify-content-center">
                  <GoogleLogin
                    clientId="YOUR_CLIENT_ID" // Replace with your actual client ID
                    onSuccess={handleGoogleLogin}
                    onError={handleGoogleLoginError}
    
                  />
                </div>
              </div>
  
  
            </Col>
  
  
  
          </Row>
        </Container>
  
        <Regmodal show={showModal} handleClose={handleModalClose} />
  
  
  
  
  
  
  
      </div>
    </div>
  )
}

export default Login