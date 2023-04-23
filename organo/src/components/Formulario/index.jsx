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

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={Times} />
                <Botao>
                    Criar cards
                </Botao>
            </form>
        </section>
    )
}