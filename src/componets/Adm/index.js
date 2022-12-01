import axios from "axios";
import React from "react";
import { useEffect } from "react";
import './adm.css'

function Adm(){

    useEffect(()=>{
        axios.get("https://localhost:3000/members").then(()=>{
            console.log("Todos os membros foram consumidos com sucesso");
        }).catch(()=>{
            console.log("O consumo dos membros por meio do metodo GET falhou");
        })
    }, []);

    return(
        <div>Olá</div>
    );
}

export default Adm;