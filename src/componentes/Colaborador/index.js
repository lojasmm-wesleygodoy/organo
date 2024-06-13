import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoRemover }) => {
    const removendo = () => {
        aoRemover(colaborador.nome);
    }
    return (<div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo, minHeight: '100px' }}>
            {/* <img src={colaborador.imagem} alt={colaborador.nome} /> */}
            <button className='botao-remover' onClick={removendo}>Remover</button>
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <h5>{colaborador.imagem}</h5>
        </div>
    </div>)
}

export default Colaborador