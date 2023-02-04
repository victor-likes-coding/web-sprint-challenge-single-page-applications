import React from "react";

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="banner__img-container">
                <div className="banner__subheader">
                    <h2 className="header__subheader">Your favorite food, delivered while coding</h2>
                </div>
            </div>
            <div className="banner__cta">Pizza?</div>
        </div>
    );
};

export default Banner;
