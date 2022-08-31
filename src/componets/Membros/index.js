import React from "react";
import './membros.css'
import { members } from '../../api.json'
import Cards from '../Cards'


function Membros() {
    return(
            <ul>

                {members.map((members)=>{
                    return(
                        <Cards email={members.email}></Cards>
                    );
                })}
            </ul>
    );
}

export default Membros;