import { Colaborador } from '../Colaborador';
import './style.css';
import hexToRgba from 'hex-to-rgba';

export const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, 0.5) }

    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={css}>

                <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.nome)} type="color" className='input-cor' />

                <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>

                <div className='espaco'>
                    {props.colaboradores.map(colaborador =>
                        <div className='colaboradores'>
                            <Colaborador corFundo={props.cor} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar} />
                        </div>)}
                </div>
            </section>
            : ""
    )
}