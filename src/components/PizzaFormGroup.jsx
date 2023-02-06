import React from "react";

const PizzaFormGroup = ({ title, text, children, id }) => {
    return (
        <>
            <label
                className="pizza-form-label"
                htmlFor={id}>
                <h4 className="pizza-form-label__header">{title}</h4>
                <p className="pizza-form-label__text">{text}</p>
            </label>
            {children}
        </>
    );
};

export default PizzaFormGroup;
