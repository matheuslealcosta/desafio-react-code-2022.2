import React from "react";
import Iframe from "react-iframe";
import hands from "../../Imagens/LogoCode3.png";import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../Imagens/IMG1.jpg";
import img2 from "../../Imagens/IMG2.jpg";
import "./main.css";

function Main() {
  return (
    <body>
      <div className="div-carrossel">
      <Carousel className="main-carrossel">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </Carousel>
      </div>

      <div className="informacao">
        <div className="div-img-main">
          <img src={hands} className="img-maos"></img>
        </div>
        <div className="texto-informativo">
          <p>
            A CODE é uma empresa Júnior filiada a Universidade Federal de Juiz
            de Fora. Com 5 anos de mercado na área de tecnologia e informacao a
            CODE está sempre preparada para atender da melhor forma seus
            clientes. Nossa empresa foca sempre em um bom atendimento, e na
            entrega dos projetos dentro da data estimada e sempre com a maior
            qualidade e fidelidade possível.
          </p>
        </div>
      </div>

      <div className="line-main">
        <hr></hr>
      </div>

      <div className="div-contato">
        <h1>Entre em contato</h1>
        <h2>Retornaremos em até 72h</h2>
        <div className="div-Iframe">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.1135585487827!2d-43.374472385132556!3d-21.775865585598453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ba191de0d53%3A0xf49062b61d523855!2sCode%20Empresa%20Jr.!5e0!3m2!1spt-BR!2sbr!4v1661719132480!5m2!1spt-BR!2sbr"
            referrerpolicy="no-referrer-when-downgrade"
            className="mapa-main"
          ></Iframe>
        </div>
        <div className="inputs-contato">
          <input placeholder="Nome"></input>
          <input placeholder="E-mail"></input>
          <input placeholder="Telefone"></input>
          <button>Enviar</button>
        </div>
      </div>
    </body>
  );
}

export default Main;
