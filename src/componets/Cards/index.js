import React from "react";
import './cards.css'

function Cards({name, email}){
    return(
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default Cards;