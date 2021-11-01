import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, name, price, description } = service;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Course Price: {price}</p>
                        </Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${id}`}>
                            <button className="btn btn-warning f-button-color">Book {name.toLowerCase()}</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;