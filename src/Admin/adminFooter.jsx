import { Col, Row } from 'react-bootstrap';
import './admin.css';
export default function AdminFooter() {
    return (
        <>
            <div className="bg-dark text-white text-center py-4">
                <Row>
                    <Col className='col-8 hr'>
                        <div>
                            <h2><strong>Ali Ahmad</strong></h2>
                        </div>
                        <div>
                            <h4>Chunghi Amar Sidhu Lahore,Pakistan</h4>
                        </div>
                        <div>
                            <h4>+92 322 8090884 &nbsp;|&nbsp; alilatakhun2003@gmail.com</h4>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col className='col-7 hr'>
                            <hr />
                            <h6>
                                &copy;<strong> Sky Liner Developers,</strong> All Rights Reserved | Designed By Ali Ahmad
                            </h6>
                        </Col>
                    </Row>
                </div>
            </div >
        </>

    );
};