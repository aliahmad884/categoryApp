import { Button, Form, Modal, Card, Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './admincategory.css';



export default function AdminCategory() {
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
            <Container fluid className='my-5'>
                <Row className='my-3 '>
                    {
                        categories.map(c => <CategoryPanel data={c} key={c._id} />)
                    }
                </Row>
                <hr />
                <Row className='mx-1'>
                    <CreateModal />
                </Row>
            </Container >
        </>
    );
};


export function CategoryPanel(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);

    const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false);

    const [name, updateName] = useState(props.data.Name);
    const [about, updateAbout] = useState(props.data.About);
    const [imageEdit, updateImage] = useState('');



    const handleSubmit = () => {

        let newItem = {
            id: props.data._id,
            Image: imageEdit,
            Name: name,
            About: about
        }

        fetch("https://new-server-001-19ce08ca82df.herokuapp.com/category", {
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

        fetch("https://new-server-001-19ce08ca82df.herokuapp.com/category", {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deleteItem)
        }).then(response => response.json())
            .catch(err => console.log(err));


        console.log(props.data.Name, props.data._id);
    }



    const image = (props.data.Image) ? `../Images/Categories/${props.data.Image}` : '/Images/Categories/none.png';
    return (
        <>
            <Col className='col-4'>
                <Card className='card mb-3'>
                    <Card.Header className='bg-dark'><h5 className='text-white'><i className='fa solid fa-tags'></i> {props.data.Name} </h5></Card.Header>
                    <Card.Body>
                        <img src={image} alt='appliances.png' className='cardImage' />
                        <p> {props.data.About} </p>
                        <div className='text-center'>
                            <Button type='button' onClick={handleShowEdit} className='px-5' variant='secondary'>Edit</Button>
                            &nbsp;
                            <Button type='button' onClick={handleShow} className='px-5' variant='dark'>Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-dark text-white'>
                    <Modal.Title>! Alert Prompt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Category-Name: {props.data.Name}</div>
                    Are you sure! you want to delete this Category?
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
                <Modal.Header className='bg-secondary text-white' closeButton>
                    <Modal.Title><i className='fa solid fa-arrow-circle-right'></i> Edit Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="pt-2">
                            <Form.Label >Name</Form.Label>
                            <Form.Control value={name} type='text' onChange={e => updateName(e.target.value)} placeholder='Name' />
                        </Form.Group>
                        <Form.Group className="pt-2">
                        <Form.Label >About</Form.Label>
                            <Form.Control value={about} as='textarea' onChange={e => updateAbout(e.target.value)} rows={3} placeholder='About' />
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
    const [about, updateAbout] = useState('');
    const [image, updateImage] = useState('');


    const handleSubmit = () => {

        let newItem = {
            Image: image,
            Name: name,
            About: about
        }

        console.log(newItem);

        fetch("https://new-server-001-19ce08ca82df.herokuapp.com/category", {
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
            {/* <Button type='button' onClick={handleShow} variant='secondary' ><i className='fa solid fa-plus-circle'></i> Add New Item</Button> */}
            <Button type='button' onClick={handleShow} variant='dark'><i className='fa solid fa-plus'></i> Add New Category</Button>
            <Modal
                centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header className='bg-dark text-white' closeButton>
                    <Modal.Title><i className='fa solid fa-arrow-circle-right'></i> Category Create Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="pt-2">
                            <Form.Label >Name</Form.Label>
                            <Form.Control type='text' onChange={e => updateName(e.target.value)} placeholder='Name' />
                        </Form.Group>
                        <Form.Group className="pt-2">
                            <Form.Label >About</Form.Label>
                            <Form.Control as='textarea' onChange={e => updateAbout(e.target.value)} rows={3} placeholder='About' />
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