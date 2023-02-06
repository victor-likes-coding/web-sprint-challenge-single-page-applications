import React, { useState } from "react";
import PizzaFormGroup from "./PizzaFormGroup";
import { options } from "../data/pizza";
import axios from "axios";
import * as Yup from "yup";

const schemaValidation = Yup.object().shape({
    name: Yup.string().min(2, "name must be at least 2 characters").required("name is required for order to proceed"),
    // required isn't required for checkboxes.
});

const PizzaForm = (props) => {
    const [formState, setFormState] = useState({
        size: 0,
        sauce: options.sauce[0],
        toppings: [],
        substitute: false,
        "special-instructions": "",
        name: "",
        quanity: "1",
        price: 17.99,
    });

    const [errors, setErrors] = useState({
        name: "",
    });

    const submitHandler = (event) => {
        event.preventDefault();
        (async () => {
            const result = await axios.post("https://reqres.in/api/orders", formState);
        })();
    };

    const onChangeHandler = (event) => {
        switch (event.target.name) {
            // works
            case "name":
                Yup.reach(schemaValidation, event.target.name)
                    .validate(event.target.value)
                    .then((valid) => {
                        console.log("no error");
                        setErrors({
                            ...errors,
                            [event.target.name]: "",
                        });
                    })
                    .catch(({ errors }) => {
                        setErrors({
                            ...errors,
                            [event.target.name]: errors[0],
                        });
                    });
                setFormState({ ...formState, [event.target.name]: event.target.value });
                break;
            case "toppings":
                if (formState.toppings.includes(event.target.value)) {
                    setFormState({ ...formState, [event.target.name]: formState.toppings.filter((topping) => topping !== event.target.value) });
                } else {
                    if (formState.toppings.length < 10) setFormState({ ...formState, [event.target.name]: formState.toppings.concat(event.target.value) });
                }
                break;
            case "substitute":
                setFormState({ ...formState, [event.target.name]: !formState.substitute });
                break;

            default:
                setFormState({ ...formState, [event.target.name]: event.target.value });
                break;
        }
    };
    const sizes = Object.keys(options.size).map((size, index) => {
        return (
            <option
                key={index}
                value={index}>
                {size}
            </option>
        );
    });

    const sauces = options.sauce.map((sauce, index) => {
        return (
            <label
                onChange={onChangeHandler}
                key={index}
                className="pizza-form-label__sauce-label">
                <input
                    type="radio"
                    name="sauce"
                    value={sauce}
                    defaultChecked={formState.sauce === sauce}
                />
                {sauce}
            </label>
        );
    });

    const toppings = options.topings.map((topping, index) => {
        return (
            <label key={index}>
                <input
                    type="checkbox"
                    name="toppings"
                    value={topping}
                    defaultChecked={formState.toppings.includes(topping)}
                    onChange={onChangeHandler}
                />
                {topping}
            </label>
        );
    });

    return (
        <div className="pizza-form__container">
            <h2 className="pizza-form__title">Build Your Own Pizza</h2>
            <div className="pizza-form__banner"></div>
            <form
                className="pizza-form"
                id="pizza-form"
                onSubmit={submitHandler}>
                <h3 className="pizza-form__form-header">Build Your Own Pizza</h3>
                <PizzaFormGroup
                    title="Choice of Size"
                    text="Required">
                    <select
                        onChange={onChangeHandler}
                        name="size"
                        id="size-dropdown"
                        defaultValue={formState.size}>
                        {sizes}
                    </select>
                </PizzaFormGroup>

                <PizzaFormGroup
                    title="Choice of Sauce"
                    text="Required">
                    {sauces}
                </PizzaFormGroup>

                <PizzaFormGroup
                    title="Add Toppings"
                    text="Choose up to 10.">
                    <div className="pizza-form__toppings">{toppings}</div>
                </PizzaFormGroup>

                <PizzaFormGroup
                    title="Choice of Substitution"
                    text="Choose up to 1.">
                    <label className="boolean-switch">
                        <label
                            htmlFor="checker"
                            class="input-checker">
                            Gluten Free Crust (+ $1.00)
                        </label>
                        <input
                            type="checkbox"
                            id="checker"
                            name="substitute"
                            defaultChecked={formState.substitute}
                            onChange={onChangeHandler}
                        />
                        <span class="slider"></span>
                    </label>
                </PizzaFormGroup>

                <PizzaFormGroup
                    title="Special Instructions"
                    id="special-instructions">
                    <textarea
                        id="special-text"
                        name="special-instructions"
                        placeholder="Anything else you would like to add?"
                        onChange={onChangeHandler}
                        defaultValue={formState["special-instructions"]}></textarea>
                </PizzaFormGroup>
                <hr />
                <div className="quanity--container">
                    <input
                        type="text"
                        className="pizza-form__order-name"
                        placeholder="Customer Name"
                        id="name-input"
                        defaultValue={formState.name}
                        name="name"
                        onChange={onChangeHandler}
                    />
                    <span className="">{errors.name}</span>
                    <input
                        type="number"
                        name="quanity"
                        className="pizza-form__quanity"
                        defaultValue={formState.quanity}
                        onChange={onChangeHandler}
                    />
                    <button
                        id="order-button"
                        type="submit"
                        className="pizza-form__submit">
                        Add to Order ${(formState.price * formState.quanity).toFixed(2)}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PizzaForm;
