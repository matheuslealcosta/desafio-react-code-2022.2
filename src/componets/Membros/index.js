import React, { useState, useEffect } from "react";
import "./membros.css";
import Cards from "../Cards";

function Membros() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/members").then((res) =>
      res.json().then((data) => setMembers(data))
    );
}, []);

  return (
    <div className="conteiner-cards">
    <nav className="nav-cards">
        {members.map(member =><Cards key={member.id}
        name = {member.name}
        email = {member.email}
        departamentos = {member.departamentos}
        aniversario = {member.aniversario}
        cargo = {member.cargo}
        />)}
    </nav>
    </div>
  );
}

export default Membros;






  
