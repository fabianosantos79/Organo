import './style.css';
import { AiFillCloseSquare } from 'react-icons/ai'

export const Colaborador = ({ nome, cargo, imagem, corFundo, aoDeletar }) => {
    return (
        <div className='colaborador'>
            <AiFillCloseSquare size={35} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: corFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}