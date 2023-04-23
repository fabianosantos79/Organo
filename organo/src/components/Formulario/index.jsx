import './style.css';
import { CampoTexto } from '../CampoTexto/index';
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao';

export const Formulario = () => {

    const Times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log("Formulário enviado");
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={Times} />
                <Botao>
                    Criar cards
                </Botao>
            </form>
        </section>
    )
}