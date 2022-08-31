import React from "react";
import './Login.css'
import Logo from '../../Imagens/LogoCode2.png'
import Adm from '../Adm'
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="main-login">
            <div className="conteiner-login">
                <div className="div-img-login">
                <img src={Logo} className='logo-login'></img>
                </div>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>
                <Link to='/adimin'><button className="button-login">Entrar</button></Link>
            </div>
        </div>
    );
}

export default Login;