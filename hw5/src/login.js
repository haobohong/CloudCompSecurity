import React from "react";
import { Button, Form } from "react-bootstrap";
import "./LoginForm.css";
const LoginForm = () => {
    return (
        <div className="login-form">
            <Form style={{ width: "30%" }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;   