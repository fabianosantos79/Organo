import { Colaborador } from '../Colaborador';
import './style.css';

export const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='espaco'>
                    {props.colaboradores.map(colaborador =>
                        <div className='colaboradores'>
                            <Colaborador corFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />
                        </div>)}
                </div>
            </section>
            : ""
    )
}