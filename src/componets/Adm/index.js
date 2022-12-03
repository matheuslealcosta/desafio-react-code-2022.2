import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { BsTrashFill, BsFillEyeFill, BsPencilSquare, BsFileEarmarkPlusFill } from "react-icons/bs";
import "./adm.css";


function Adm() {
  const [members, setMembers] = useState([]);
  const [itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState([10]);
  const [currentPage, setCurrentPage] = useState([0]);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + Number(itensPerPage);
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
   axios.get("http://localhost:3000/members")
      .then((response) => {
        setMembers(response.data);
        setItens(response.data);
      })
      .catch(() => {
        console.log("O consumo dos membros por meio do metodo GET falhou");
      });
  }, []);

  return (
    <main className="main-div-1">
      <div className="table-table">
      <div className="card-adm">
        <button className="botaoAdicionar"><BsFileEarmarkPlusFill/></button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="list listHeah">ID</th>
              <th className="list listHead">Nome</th>
              <th className="list listHead">Departamento</th>
              <th className="list listHead">Ação</th>
            </tr>
          </thead>
          <tbody>
            {currentItens.map((members, key) => {
              return (
                <tr>
                  <td className="list">{members.id}</td>
                  <td className="list">{members.name}</td>
                  <td className="list">{members.departamentos}</td>
                  <div className="btn">
                    <td className="td-btn">
                      <div className="botaoDeletar">
                        <button><BsTrashFill/></button>
                      </div>
                    </td>
                    <td className="td-btn">
                      <div className="botaoEditar">
                        <button><BsPencilSquare/></button>
                      </div>
                    </td>
                    <td  className="td-btn">
                      <div className="botaoVisualizar">
                        <button><BsFillEyeFill/></button>
                      </div>
                    </td>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div>
        {Array.from(Array(pages), (item, index) => {
          return <button  className="btn-page" value={index} onClick={(e) => setCurrentPage(index)}>{index}</button>
        })}
      </div>
        </div>
      </div>
    </main>
  );
}

export default Adm;
