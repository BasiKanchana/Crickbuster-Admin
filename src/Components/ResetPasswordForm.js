import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import LoginForm from '../Images/login-form.png';
import LoginFormLogo from '../Images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPasswordForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (event.target.className.includes('modal add-question-modal')) {
            closeModal();
        }
    };

    const BackToLogin = () => {
        navigate('/Login');
    };

    const handleVerifyEmail = () => {
        setIsVerified(true);
    };

    return (
        <div>
            <section className="d-flex">
                <Container fluid>
                    <Row className="p-0">
                        <Col lg={6} className="p-0">
                            <img src={LoginForm} className="w-100 left-side-image" alt="" />
                        </Col>
                        <Col lg={6} className="d-flex justify-content-center align-items-center flex-column py-4">
                            <div className="d-flex justify-content-center flex-column" style={{ width: '50%' }}>
                                <img src={LoginFormLogo} alt="" className="w-100 mb-5" />
                                <Form className="w-100">
                                    {!isVerified ? (
                                        <>
                                            <h5 className="mb-4 fw-medium">ENTER YOUR EMAIL</h5>
                                            <Form.Group className="mb-5" controlId="verifyEmailInput">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder='Enter Email' />
                                            </Form.Group>
                                            <Button variant="primary" className="login-form-btn form-control mb-5" onClick={handleVerifyEmail}>
                                                VERIFY
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <h5 className="mb-4 fw-medium">RESET PASSWORD</h5>
                                            <Form.Group className="mb-3" controlId="emailInput">
                                                <Form.Label>Email ID</Form.Label>
                                                <Form.Control type="email" placeholder='Enter Email'/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="newPasswordInput">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter New Password"/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="confirmPasswordInput">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" placeholder="Re-Enter New Password" />
                                                <Form.Text className="text-danger">
                                                    Password Mismatch
                                                </Form.Text>
                                            </Form.Group>
                                            <Button variant="primary" className="login-form-btn form-control mb-5" onClick={openModal}>
                                                RESET
                                            </Button>
                                        </>
                                    )}
                                </Form>
                                <Modal show={isOpen} onHide={closeModal} centered>
                                    <Modal.Body className="py-5 text-center">
                                        <Button variant="close" onClick={closeModal}>&times;</Button>
                                        <h5 className="py-2 modal-box-heading">PASSWORD RESET SUCCESSFUL!</h5>
                                        <div className="d-grid gap-2 col-6 mx-auto py-4">
                                            <Button variant="primary" className="login-form-btn" onClick={BackToLogin}>
                                                LOGIN NOW
                                            </Button>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ResetPasswordForm;
