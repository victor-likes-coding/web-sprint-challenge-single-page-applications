import React from "react";
import FoodPlace from "./FoodPlace";

const PlacesOfInterest = ({ city, data }) => {
    const foodPlaces =
        data?.length &&
        data.map((place) => {
            return (
                <FoodPlace
                    data={place}
                    key={place.id}
                />
            );
        });
    return (
        <section className="food">
            <h2 className="food__heading">Food Delivery in {city}</h2>
            <section className="food__places">{foodPlaces}</section>
        </section>
    );
};

export default PlacesOfInterest;
