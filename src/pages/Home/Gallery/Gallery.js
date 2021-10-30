import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className="overly-img pt-4 pb-4 extra-margin-top" id="gallery">
            <div className="container">
                <h1 className="text-center mt-5 mb-4"> <span className="word-color">Our</span>  Gallery</h1>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/sW86qHK/g6.jpg" />

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/b2LX5sc/g3.jpg" />

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/hZcHB29/g1.jpg" />

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/DGbWPms/g2.jpg" />

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/mS3n4vV/g5.jpg" />

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/8XPvgVN/g4.jpg" />

                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default Gallery;