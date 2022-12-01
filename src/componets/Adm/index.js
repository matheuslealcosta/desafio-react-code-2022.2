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
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Departamento</th>
                                <th>Ação</th>
            {members.map((members, key) => {
                return (
                    <div className="card-adm">
                        <table className="table">
                            <tr>
                                <td>{members.id}</td>
                                <td>{members.name}</td>
                                <td className="departamento">{members.departamentos}</td>
                                <td>
                                <div className="btn">
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
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            })
            }
        </main>



    )
}

export default Adm;