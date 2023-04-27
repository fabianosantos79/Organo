import './style.css';

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>

            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value="" disabled>Escolha um time</option>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>

        </div>
    )
}