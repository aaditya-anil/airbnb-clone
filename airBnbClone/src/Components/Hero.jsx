import React from "react";
import heroImage from "../assets/heroImage.svg"
import '../index.css'


function Hero(){
    return(
        <div className="Hero-wrapper">
            <img src={heroImage}></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero;