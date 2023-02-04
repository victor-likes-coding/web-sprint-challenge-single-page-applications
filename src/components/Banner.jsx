import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="banner__img-container">
                <div className="banner__subheader">
                    <h2 className="header__subheader">Your favorite food, delivered while coding</h2>
                </div>
            </div>
            <Link to="/pizza" className="banner__cta" id="#order-pizza">
                Pizza?
            </Link>
        </div>
    );
};

export default Banner;
