import React from "react";
import './Login.css'
import Logo from '../../Imagens/logoCode.png'

function Login(){
    return(
        <div className="main-login">
            <div className="conteiner-login">
                <div className="div-img-login">
                <img src={Logo} className='logo-login'></img>
                </div>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>
                <input type='submit'></input>
            </div>
        </div>
    );
}

export default Login;