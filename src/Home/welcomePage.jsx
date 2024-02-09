import { Col, Row } from 'react-bootstrap';
import '../Categories/img.css';
export default function Welcomepage() {
    return (
        <>
            <Row>
                <Col className='col'>
                    <div className="body">
                        <div className="loader"></div>
                    </div>
                </Col>
            </Row>
            <Row className='welcomeRow'>
                <Col className='col text-center'>
                <h1>Welcome To our Website.</h1>
                </Col>
            </Row>
        </>
    );
}