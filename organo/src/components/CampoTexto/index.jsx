import './style.css'

export const CampoTexto = (props) => {

    const placeholder = `${props.placeholder}...`

    return (
        <div className='texto-input'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} type="text" placeholder={placeholder} />
        </div>
    )
}