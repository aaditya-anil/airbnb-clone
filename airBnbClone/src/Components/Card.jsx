import React from "react";

import staricon from '../assets/star-icon.svg'


function Card(props){
    console.log(props)
    return(
        <div className="card-wrapper">
            <div className="player-image-wrapper">
                <img src={props.playerImage} alt="player-image"></img>
                <button>{props.buttonText}</button>
            </div>
            <div className="rating-wrapper">
                <img src={staricon} alt="star-icon"></img>
                <p>{props.ratings}</p><p className="rating-sub"> ({props.ratingSub})</p>    
            </div>
            <p> {props.mainText}</p>
            <p> <strong>{props.price}$</strong> / person</p>
        </div>
    )
}

export default Card