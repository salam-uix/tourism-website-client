import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <p className="text-white site-name-top">Your welcome to Travel Daddy</p>
                <h1 className="site-name text-white">Travel Daddy</h1>
                <p className="text-white text-center w-50">We do ready to care your entire journey. Our experienced guide will exlore best places for your better refreshnesh</p>
                <br />
            </div>
            <div className="find-now-container">
                <div className="find-now">
                    <div className="input-container">
                        <p>Whare to</p>
                        <input type="search" name="" id="" placeholder="Enter keyword" />
                    </div>

                    <div className="input-container">
                        <p>When</p>
                        <input type="search" name="" id="" placeholder="October" />
                    </div>
                    <div className="input-container">
                        <p>Type</p>
                        <input type="search" name="" id="" placeholder="Adventure" />
                    </div>
                    <div className="find-btn-container">
                        <input className="find-btn" type="submit" value="Find Now" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;