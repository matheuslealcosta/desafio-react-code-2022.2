import React from "react";
import {useState} from 'react'
import "./navbar.css";
import { Link } from "react-router-dom";
import logoCode from '../../Imagens/logoCode.png'

function Navbar() {
  const [active, setActive] = useState("itens");
  const [travaNav, setTravaNat] = useState("nav");
  const navToggle = () => {
     active === 'itens' ? setActive('itens ativo') : setActive('itens');
     travaNav === 'nav' ? setTravaNat('nav trava-nav') : setTravaNat('nav');
  }


  return (
    <nav className={travaNav}>
      <Link to="/" className="img-main"><img src={logoCode}></img></Link>
      <ul className={active}>
        <Link to='/' className="item">Home</Link>
        <Link to='/membros' className="item">Membros</Link>
        <Link to='/login' className="item"><button className="button-nav-login">Login</button></Link>
      </ul>
     <div onClick={navToggle} className="nav-toggler">
        <div className="linha1"></div>
        <div className="linha2"></div>
        <div className="linha3"></div>
     </div>


    </nav>
  );
}

export default Navbar;
