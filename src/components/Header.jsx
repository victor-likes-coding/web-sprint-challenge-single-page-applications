import React from "react";
import Nav from "./Nav";

const Header = (props) => {
    return (
        <header className="header header--flex">
            <h1 className="header__title--main">Lambda Eats</h1>
            <Nav />
        </header>
    );
};

export default Header;
