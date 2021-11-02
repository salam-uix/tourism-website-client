import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { _id, img, name, price, duration, packagename } = service;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Package: {packagename}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>Duration: {duration}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>Value: {price}</p>
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning f-button-color">Book {name.toLowerCase()}</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;