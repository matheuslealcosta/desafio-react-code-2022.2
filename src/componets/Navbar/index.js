import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logoCode from '../../Imagens/logoCode.png'

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="img-main"><img src={logoCode}></img></Link>
      <ul className="itens">
        <Link to='/quem-somos' className="item">Quem somos</Link>
        <Link to='/contato' className="item">Contato</Link>
        <Link to='/login' className="item">Login</Link>
        
      </ul>
    </nav>
  );
}

export default Navbar;
