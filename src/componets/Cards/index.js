import React from "react";
import './cards.css'

function Cards({name, email, departamentos, aniversario, cargo}){
    return(
        <div className="cardes">
            <h1>Nome: {name}</h1>
            <p>E-mail: {email}</p>
            <p>Aniversario: {aniversario}</p>
            <div>
            <p className="flex-dep">Departamentos: {departamentos.map((dep)=> <div className="div-dep"> { dep}</div>)}</p>
            </div>
            <p>Cargo: {cargo}</p>
        </div>
    );
}

export default Cards;