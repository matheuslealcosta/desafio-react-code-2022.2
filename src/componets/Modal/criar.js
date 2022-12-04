import "./criar.css";

function Criar({closeCriar}) {
  return (
    <div className="backgroud-modal">
      <div className="internalModalCriar">
        <div className="button-sair">
            <button onClick={()=>{closeCriar(false)}}> X </button>
        </div>
        <div className="title">
          <h1>Criar usuarios</h1>
        </div>
        <div className="body-modal">
          <input></input>
          <input></input>
          <input></input> 
          <input></input>
          <input></input>
        </div>
        <div>
          <button className="cancelar-criar" onClick={()=>{closeCriar(false)}}>Cancelar</button>
          <button className="criar-criar">Criar</button>
        </div>
      </div>
    </div>
  );
}

export default Criar;
