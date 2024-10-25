import React from "react";
import playerimage from '../assets/player1-image.png'
import Card from "./Card";
import playerData from "../data/playerData";

function Cards(){
    const playerDetails = playerData.map(x=>
        <Card
            playerImage = {x.coverImg.player1Image}
            buttonText = {x.openSpots}
            ratings = {x.stats.rating}
            ratingSub = {x.stats.reviewCount}
            mainText = {x.title}
            price = {x.price}       
        />
    )
    return(
        <div className="cards-wrapper"> 
            {playerDetails}
        </div>
    )
}

export default Cards
