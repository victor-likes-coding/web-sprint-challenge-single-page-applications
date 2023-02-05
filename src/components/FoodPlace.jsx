import React from "react";

const FoodPlace = ({ data }) => {
    return (
        <section className="food-place">
            <div className="food-place__img-container">
                <img
                    src={data.img}
                    alt="lorem picsum pic"
                    className="food-place__img"
                />
            </div>
            <section className="food-place__info">
                <h3 className="food-place__title">{data.name}</h3>
                <section className="food-place__categories">
                    <div className="food-place__affordability">
                        {data.affordability}
                        {data.categories.map((category, index) => (
                            <span key={index}> - {category}</span>
                        ))}
                    </div>
                </section>
                <section className="food-place__status">
                    <p className="food-place__wait">
                        {data.minWait} - {data.maxWait} Mins
                    </p>
                    <p className="food-place__fee">${data.fee}</p>
                </section>
            </section>
        </section>
    );
};

export default FoodPlace;
