import { Colaborador } from '../Colaborador';
import './style.css';

export const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            {props.colaboradores.map(colaborador =>
                <div className='colaboradores'>
                    <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />
                </div>)}
        </section>
    )
}