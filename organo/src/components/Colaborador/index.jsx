import './style.css';
import { AiFillCloseSquare, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export const Colaborador = ({ nome, cargo, imagem, corFundo, aoDeletar, id, favorito, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
        <div className='colaborador'>
            <AiFillCloseSquare
                size={35}
                className='deletar'
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho' style={{ backgroundColor: corFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {(favorito)
                        ? <AiFillHeart size={25} onClick={favoritar} />
                        : <AiOutlineHeart size={25}  onClick={favoritar} />}
                </div>
            </div>
        </div>
    )
}