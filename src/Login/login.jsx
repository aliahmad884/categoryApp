import "./login.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';



export default function LoginForm() {

    const [name, updateName] = useState('');
    const [password, updatePassword] = useState('');

    const [msg, updateMsg] = useState('');

    const [admin, updateAdmin] = useState('');

    function handleLogin() {
        if (name === "Ali Ahmad" && password === "ali3627516") {
            updateAdmin("/admin");
        }
        else {
            updateMsg('Incorrect Username or Password');
        }
    }



    return (
        <>
            <div>
                <Row className="mt-5">
                    <Col className='col-5 m-auto loginmain  p-5'>
                        <h2 className="text-center"><i class="fa-solid fa-user-gear"></i> Administrator Login</h2>
                        <Form>
                            <Form.Group className="pt-2">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' onChange={e => updateName(e.target.value)} placeholder='Name' />
                            </Form.Group>
                            <Form.Group className="pt-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' onChange={e => updatePassword(e.target.value)} placeholder='Password' />
                            </Form.Group>
                            <p className="text-danger">{msg}</p>
                        </Form>
                        <div className="text-center mt-5">
                            <Link to='/'><Button type="button" variant="secondary">Return</Button></Link>&nbsp;
                            <Link to={admin}><Button type="button" onClick={handleLogin} variant="dark">Login</Button></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}