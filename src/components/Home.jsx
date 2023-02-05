import React from "react";
import Banner from "./Banner";
import PlacesOfInterest from "./PlacesOfInterest";

const Home = ({ data }) => {
    return (
        <div className="home">
            <Banner />
            <PlacesOfInterest city="Gotham City" data={data} />
        </div>
    );
};

export default Home;
