
import { Container, Dropdown, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../Categories/img.css';
import './home.css';
import HomeFooter from './homeFooter';

export default function HomePage() {

    const [categories, updateCategories] = useState([]);
    useEffect(
        () => {
            fetch("https://new-server-001-19ce08ca82df.herokuapp.com/category")
                .then(response => response.json())
                .then(data => updateCategories(data))
                .catch(err => console.log(err))
        }, []);



    return (
        <>
            <Navbar expand="lg" className=" bg-info">
                <Container fluid>
                    <Navbar.Brand href="#home"> <Link className='StyleLink  bg-secondary Gbg-color-hover'> <h1><i class="fa-brands fa-skyatlas"></i> Sky Liner</h1> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>  <Link to="/" className='StyleLink bg-secondary Gbg-color-hover'><h5><i class="fa-solid fa-house-user "></i> Home</h5> </Link> </Nav.Link>
                            <Nav.Link> <Link to="/category" className='StyleLink bg-secondary Gbg-color-hover'><h5><i className='fa solid fa-bars '></i> Categories</h5></Link> </Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant='info' id="dropdown-basic"></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        categories.map(c => <DropLink data={c} key={c._id} />)
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link> <Link to="/adminLogin" className='StyleLink bg-secondary Gbg-color-hover'><h5><i class="fa-solid fa-user-gear"></i> Admin</h5></Link> </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />

            <HomeFooter />
        </>
    );
};

export function DropLink(props) {
    let itemLink = "";
    if (props.data.Name === 'Electronic Devices') {
        itemLink = "/E.devices";
    }
    else if (props.data.Name === 'TV & Home Applainces') {
        itemLink = "/K.accessories";
    }
    else if (props.data.Name === 'Electronic Accessories') {
        itemLink = "/E.accessories";
    }
    else {
        itemLink = "/EmptyPage";
    }

    return (
        <>
            <Dropdown.Item><Link to={itemLink} className='StyleLink'><i className='text-info fa solid fa-tags'></i>&nbsp; {props.data.Name} </Link></Dropdown.Item>
        </>
    )
}


