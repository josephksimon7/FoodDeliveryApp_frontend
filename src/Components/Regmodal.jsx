import React from 'react';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';

const Regmodal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>REGISTER</Modal.Title>
            </Modal.Header>
            <div style={{textAlign:"center"}} className='p-3'>
            <Modal.Body>
                <FloatingLabel controlId="userName" label="Your Name" className="mb-3">
                    <Form.Control type="email" placeholder="username" />
                </FloatingLabel>

                <FloatingLabel controlId="registerEmail" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="phoneNumber" label="Phone Number" className="mb-3">
                    <Form.Control type="number" placeholder="phoneNumber" />
                </FloatingLabel>

                <FloatingLabel controlId="registerPassword" label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
               
                
                    <Button variant="primary" onClick={handleClose} style={{ background: '#FE0C00', border: 'none' }}>
                        Sign Up
                    </Button>
            </Modal.Body>
            </div>
        </Modal>
    );
};

export default Regmodal;
