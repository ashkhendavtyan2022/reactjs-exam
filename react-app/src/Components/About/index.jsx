import React from "react";
import "./style.css"
import profilePic from "./../../assets/photos/img.jpg"

export const About = () => {

    return <div className="about">
            <img src={profilePic} alt="Profile Picture" />
        <div className="about-details">
            <h2>Ashkhen Davtyan</h2>
            <p>Junior Front-End Developer</p>
            <p>Courses: TCO Academy</p>
        </div>
        
    </div>
}