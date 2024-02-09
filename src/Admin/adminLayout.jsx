
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import '../Categories/img.css';
import './admin.css';
import AdminFooter from './adminFooter';
import SideBar from './adminSideBar';

export default function AdminLayout() {
    return (
        <>
            <Navbar expand="lg" className="navbar-dark bg-dark">
                <Container fluid>
                    <Navbar.Brand href="#home"> <Link className='StyleLink bg-color-hover'><h1><i class="fa-brands fa-skyatlas"></i> Sky Liner<strong className='admin'>admin</strong></h1> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div className='maindiv'>
                <div className='sideBardiv'>
                    <SideBar />
                </div>
                <Outlet />
            </div>

            <AdminFooter />
        </>
    );
};
