import { useState } from 'react'
import Banner from './components/Banner'
import { Formulario } from './components/Formulario'
import { Time } from './components/Time'
import { Rodape } from './components/Rodape'


function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      cor: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      cor: '#f0f8e2'
    },
    {
      nome: 'Devops',
      cor: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      cor: '#fae9f5'
    },
    {
      nome: 'Mobile',
      cor: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#ffeedf'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('Deletando colaborador...');
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time
    }));
  }

  return (
    <>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(item => item.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
        />
      ))}
      <Rodape />
    </>
  )
}

export default App
