import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './adm.css'

function Adm() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get(" http://localhost:3000/members").then((response) => {
            setMembers(response.data)
        }).catch(() => {
            console.log("O consumo dos membros por meio do metodo GET falhou");
        })
    }, []);

    return (

        <main>
            {members.map((members, key) => {
                return (
                    <div className="botoes">
                        <h1>{members.id}</h1>
                        <h2>{members.name}</h2>
                        <p>{members.departamentos}</p>
                        <div className="botaoDeletar">
                            <button>Excluir</button>
                        </div>

                        <div className="botaoEditar">
                            <button>Editar</button>
                        </div>

                        <div className="botaoVisualizar">
                            <button>Visualizar</button>
                        </div>

                    </div>
                )
            })
            }
        </main>



    )
}

export default Adm;