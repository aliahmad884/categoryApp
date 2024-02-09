import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './admin.css';
import { Modal } from 'react-bootstrap';

export default function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showHome, setShowHome] = useState(false);

    const handleCloseHome = () => setShowHome(false);
    const handleShowHome = () => setShowHome(true);

    const [showCat, setShowCat] = useState(false);

    const handleCloseCat = () => setShowCat(false);
    const handleShowCat = () => setShowCat(true);


    return (
        <>
            <Button className='SideBtn' variant='dark' onClick={handleShow}>
                Panel
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title><h1>Sky Liner<strong className='admin'>admin</strong></h1> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='main'>
                    <hr />
                    <Link onClick={handleClose} to="" className='Link' ><h5><i className='fa solid fa-tags'></i> Admin Home</h5> </Link>
                    <hr />
                    <Link onClick={handleClose} to="/admin/Category" className='Link'><h5><i className='fa solid fa-tags'></i> Admin Categories</h5></Link>
                    <hr />
                    <Link onClick={() => {
                        handleShowHome()
                        handleClose()
                    }} className='Link' ><h5><i className='fa solid fa-tags'></i> User Home</h5> </Link>
                    <hr />
                    <Link onClick={() => {
                        handleShowCat()
                        handleClose()
                    }}
                        className='Link'><h5><i className='fa solid fa-tags'></i> User Categories</h5></Link>
                    <hr />
                    <Link onClick={handleClose} to="" className='Link'><h5><i className='fa solid fa-tags'></i> About</h5></Link>
                    <hr />
                    <footer className='Footer'>
                        <h6>
                            &copy;<strong> Sky Liner Developers,</strong> All Rights Reserved
                        </h6>
                    </footer>
                </Offcanvas.Body>
            </Offcanvas >

            <Modal show={showCat} onHide={handleCloseCat} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-dark text-white'>
                    <Modal.Title>! Alert Propmt</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure! you want leave admin page and go to User Categories?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCat}>
                        Close
                    </Button>
                    <Link to="/category" className='Link'>
                        <Button variant="dark" onClick={handleCloseCat}>
                            Leave
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>

            <Modal show={showHome} onHide={handleCloseHome} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-dark text-white'>
                    <Modal.Title>! Alert Propmt</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure! you want leave admin page and go to User Home?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseHome}>
                        Close
                    </Button>
                    <Link to='/' className='Link'>
                        <Button variant="dark" onClick={handleCloseHome}>
                            Leave
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}
