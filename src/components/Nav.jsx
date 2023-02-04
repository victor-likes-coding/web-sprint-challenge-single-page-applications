import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="header__nav--flex">
            <NavLink exact to="/" className="header__nav-link">
                Home
            </NavLink>
            <NavLink to="/help" className="header__nav-link">
                Help
            </NavLink>
        </nav>
    );
};

export default Nav;
