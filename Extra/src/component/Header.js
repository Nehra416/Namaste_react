import React from "react";
import { Link } from "react-router/dom";

const Header = () => {

    return (
        <>
            <div className="navbar">
                <h2 className="logo">LOGO</h2>
                <ul className="navItem">
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/about"}><li>About</li></Link>
                    <Link to={"/contact"}><li>Contact US</li></Link>
                </ul>
            </div>
        </>
    )
};

export default Header;