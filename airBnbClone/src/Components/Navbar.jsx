import React from "react";
import airBNBlogo from "../assets/airbnbLogo.svg"
import '../index.css'


function Navbar(){
    return(
        <>
            <nav>
                <img src={airBNBlogo} alt="" />
            </nav>
        </>
    )   
}

export default Navbar