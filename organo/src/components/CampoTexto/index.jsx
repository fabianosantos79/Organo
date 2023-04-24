import { useState } from 'react'
import './style.css'

export const CampoTexto = (props) => {

    const placeholder = `${props.placeholder}...`

    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='texto-input'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type="text" placeholder={placeholder} />
        </div>
    )
}