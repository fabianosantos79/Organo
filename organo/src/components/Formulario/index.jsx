import './style.css';
import { CampoTexto } from '../CampoTexto/index';
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao';
import { useState } from 'react';
import { InputColor } from '../InputColor'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    label="Times"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastraTime({ nome: nomeTime, cor: corTime })
            }
            }
            >
                <h2>Preencha os dados para um Novo Time</h2>
                <CampoTexto
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />

                <InputColor
                    obrigatorio
                    label="Cor"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />

                <Botao>
                    Criar um novo Time
                </Botao>
            </form>
        </section>
    )
}