// import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row, Modal, Form } from 'react-bootstrap';
import "../img.css"



export default function AccesooreisItemPanel() {
    const [categoriesList, updateCategoriesList] = useState([]);
    useEffect(
        () => {
            fetch("https://new-server-001-19ce08ca82df.herokuapp.com/accessories")
                .then(response => response.json())
                .then(data => updateCategoriesList(data))
                .catch(err => console.log(err))
        }, []);




    return (
        <>
            <Container fluid className='my-5' >
                <Row>
                    <Col className='col'>
                        <Card>
                            <Card.Header className='bg-info p-3'><h4><i className='fa solid fa-list'></i> Electronic Accessories</h4></Card.Header>
                            <Card.Header className='p-1'>
                                <Row className='px-3 py-1'>
                                    <Col className='col-3'><h5>Image</h5> </Col>
                                    <Col className='col-3'><h5>Name</h5> </Col>
                                    <Col className='col-3'><h5>Parent</h5> </Col>
                                    <Col className='col text-center'><h5>Action</h5> </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                {categoriesList.map(c => <AccessoriesItems data={c} key={c.Id} />)}
                            </Card.Body>
                            <Card.Footer className='text-center p-0 bg-info'>
                                <CreateModal />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export function AccessoriesItems(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);

    const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false);

    const [name, updateName] = useState(props.data.Name);
    const [parent, updateParent] = useState(props.data.Parent);
    const [imageEdit, updateImage] = useState('');

    const handleSubmit = () => {

        let newItem = {
            id: props.data._id,
            Image: imageEdit,
            Name: name,
            Parent: parent
        }

        fetch("https://new-server-001-19ce08ca82df.herokuapp.com/accessories", {
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(response => response.json())
            .catch(err => console.log(err));
        console.log(newItem);
    }





    function handleDelete() {
        let deleteItem = {
            id: props.data._id
        }

        fetch("https://new-server-001-19ce08ca82df.herokuapp.com/accessories", {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deleteItem)
        }).then(response => response.json())
            .catch(err => console.log(err));


        console.log(props.data.Name, props.data._id);
    }

    // const image = (props.data.Image) ? `Images/Categories/${props.data.Image}` : "./Images/Categories/none.png"
    let image = "";
    if (props.data.Parent === "Cooler") {
        image = `Images/Categories/cooler.png`;
    }
    else if (props.data.Parent === "Head-Phone") {
        image = `Images/Categories/headphone.png`;
    }
    else if (props.data.Parent === "Other") {
        image = `Images/Categories/${props.data.Image}`;
    }
    else {
        image = "Images/Categories/none.png";
    }
    return (
        <>
            <Row className='p-1'>
                <Col className='col-3'>
                    <img src={image} alt='ItemImage.png' className='cimage' />
                </Col>
                <Col className='col-3'>{props.data.Name}</Col>
                <Col className='col-3'>{props.data.Parent}</Col>
                <Col className='col text-center'>
                    <Button type='button' onClick={handleShowEdit} variant='secondary'>Edit</Button>
                    &nbsp;
                    <Button type='button' onClick={() => {
                        handleShow()
                    }}
                        variant='dark'>Delete</Button>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-info'>
                    <Modal.Title>! Alert Prompt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Item-Name: {props.data.Name}</div>
                    <div>Item-Parent: {props.data.Parent}</div>
                    Are you sure! you want to delete {props.data.Name} {props.data.Parent}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={() => {
                        handleClose()
                        handleDelete()
                        window.location.reload()
                    }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal >


            <Modal centered show={showEdit} onHide={handleCloseEdit} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-info' closeButton>
                    <Modal.Title><i className='fa solid fa-arrow-circle-right'></i> Edit Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="pt-2">
                            <Form.Label >Name</Form.Label>
                            <Form.Control value={name} type='text' onChange={e => updateName(e.target.value)} placeholder='Name' />
                        </Form.Group>
                        <Form.Group className="pt-2">
                            <Form.Label>Parent</Form.Label>
                            <Form.Select value={parent} onChange={e => updateParent(e.target.value)}>
                                <option value="Not Selected">--Select Category--</option>
                                <option value="Cooler">Cooler</option>
                                <option value="Head-Phone">Head-Phone</option>
                                <option value="Other" >Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="pt-2">
                            <Form.Label>Select Image</Form.Label>
                            <Form.Control onChange={e => updateImage(e.target.files[0].name)} type="file" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Cancle
                    </Button>
                    <Button variant='dark' onClick={() => {
                        handleSubmit()
                        handleCloseEdit()
                        window.location.reload()
                    }}>
                        <i className='fa solid fa-plus-circle'></i> Update
                    </Button>
                </Modal.Footer>
            </Modal >


        </>
    );
}

export function CreateModal() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const [name, updateName] = useState('');
    const [parent, updateParent] = useState('');
    const [image, updateImage] = useState('');


    const handleSubmit = () => {

        let newItem = {
            Image: image,
            Name: name,
            Parent: parent

        }

        fetch("https://new-server-001-19ce08ca82df.herokuapp.com/accessories", {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(response => response.json())
            .catch(err => console.log(err));
    }


    return (
        <>
            <Button type='button' onClick={handleShow} variant='info' ><i className='fa solid fa-plus-circle'></i> Add New Item </Button>

            <Modal
                centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-info' closeButton>
                    <Modal.Title><i className='fa solid fa-arrow-circle-right'></i> Create Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="pt-2">
                            <Form.Label >Name</Form.Label>
                            <Form.Control type='text' onChange={e => updateName(e.target.value)} placeholder='Name' />
                        </Form.Group>
                        <Form.Group className="pt-2">
                            <Form.Label>Parent</Form.Label>
                            <Form.Select onChange={e => updateParent(e.target.value)}>
                                <option value="Not Selected">--Select Category--</option>
                                <option value="Cooler">Cooler</option>
                                <option value="Head-Phone">Head-Phone</option>
                                <option value="Other" >Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="pt-2">
                            <Form.Label>Select Image</Form.Label>
                            <Form.Control onChange={e => updateImage(e.target.files[0].name)} type="file" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant='dark' onClick={() => {
                        handleSubmit()
                        handleClose()
                        window.location.reload()
                    }}>
                        <i className='fa solid fa-plus-circle'></i> Add
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}
