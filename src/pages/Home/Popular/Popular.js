import React from 'react';
import './Popular.css';

const Popular = () => {
    return (
        <div className="container d-extra-margin-top">
            <div className="row me-3">
                <div className="single-popular-1 col-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="fifteen">
                        <h4>$150</h4>
                    </div>
                    <div className="single-popular-1-content">
                        <h3>Scuva Diving</h3>
                        <h1>9.2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta ipsa, neque soluta ullam enim nostrum iure praesentium fugit modi repellat.</p>
                    </div>
                </div>
                <div className="single-popular-2 col-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="fifteen">
                        <h4>$450</h4>
                    </div>
                    <div className="single-popular-2-content">
                        <h3>Scuva Diving</h3>
                        <h1>9.2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta ipsa, neque soluta ullam enim nostrum iure praesentium fugit modi repellat.</p>
                    </div>
                </div>
                <div className="single-popular-3 col-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="fifteen">
                        <h4>$125</h4>
                    </div>
                    <div className="single-popular-3-content">
                        <h3>Scuva Diving</h3>
                        <h1>9.2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta ipsa, neque soluta ullam enim nostrum iure praesentium fugit modi repellat.</p>
                    </div>
                </div>
            </div>
            <div className="text-center extra-margin-top">
                <div className="d-flex flex-sm-column flex-md-row flex-lg-row  justify-content-between align-items-center">
                    <div className="text-start w-50 mb-3">
                        <h1>VIDEO TOUR</h1>
                        <span>Adventure is out there</span>
                    </div>
                    <div className="text-start">
                        <p>We offer our clients the most complete and unique open air adventure thrills they have ever experienced complete with unforgettable moments. Your safety is our most important mission and for this reason.</p>
                    </div>
                </div>
                <div className="h-100">
                    <iframe className="container-fluid" src="https://www.youtube.com/embed/5V7h5Pc6rIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Popular;