import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import './category.css';



export default function Home() {

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
                <Row className='my-3'>
                    {
                        categories.map(c => <Panel data={c} key={c._id} />)
                    }
                </Row>
            </Container >
        </>
    );
};






export function Panel(props) {

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



    const image = (props.data.Image) ? `Images/Categories/${props.data.Image}` : 'Images/Categories/none.png';
    return (
        <>
            <Col className='col-4 mb-3'>
                <Link to={itemLink} className='StyleLink'>
                    <Card className='catCard'>
                        <Card.Header className='bg-info'><h4 className='text-dark'><i className='fa solid fa-tags'></i> {props.data.Name}</h4></Card.Header>
                        <Card.Body>
                            <img src={image} alt='appliances.png' className='cardImage' />
                            <p className='mt-4'> {props.data.About} </p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    );
}