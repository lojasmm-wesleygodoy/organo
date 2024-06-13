import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, remover }) => {
    const aoRemoverPai = (nome) => {
        // colaboradores = colaboradores.filter(item => {
        //     console.log(item)
        //     return item.nome !== nome
        // });
        // console.log(colaboradores)
        // console.log(nome)
        // console.log(colaboradores.filter(item => item.nome != nome))
        colaboradores = colaboradores.filter(item => item.nome != nome)
        remover(colaboradores)
        
    }
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            {/* <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3> */}
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoRemover={aoRemoverPai} />)}
            </div>
        </section>

    )
}

export default Time