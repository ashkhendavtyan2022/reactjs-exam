import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <ul className="nav-item">
                <li><NavLink to={""}>About Me</NavLink></li>
                <li><NavLink to={"/apply"}>Apply</NavLink></li>
                <li><NavLink to={"/users"}>Users</NavLink></li>
            </ul>
        </nav>
    )
}