import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://creepy-warlock-17654.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container" id="services">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 who-we-border">
                    <h1><span>WHO</span> WE ARE</h1>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p>We’re not like other gyms. We won’t tie you into a contract. Or charge you a fortune every month. So make yourself at home and take a look around.</p>
                </div>
            </div>
            <h1 className="text-center mt-5 mb-4"><span className="word-color">Our</span> Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>


        </div>
    );
};

export default Services;