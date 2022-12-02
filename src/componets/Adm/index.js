import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./adm.css";

function Adm() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:3000/members")
      .then((response) => {
        setMembers(response.data);
      })
      .catch(() => {
        console.log("O consumo dos membros por meio do metodo GET falhou");
      });
  }, []);

  return (
    <main>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Departamento</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {members.map((members, key) => {
            return (
              <tr>
                <td>{members.id}</td>
                <td>{members.name}</td>
                <td>{members.departamentos}</td>
                <td>
                <div className="botaoDeletar">
                      <button>Excluir</button>
                    </div>
                </td>
                <td>
                    <div className="botaoEditar">
                      <button>Editar</button>
                    </div>
                </td>
                <td>
                    <div className="botaoVisualizar">
                      <button>Visualizar</button>
                    </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </main>
  );
}

export default Adm;
