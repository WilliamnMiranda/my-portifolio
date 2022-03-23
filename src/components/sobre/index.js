import React from 'react'
import {ContainerSobre,ContainerFoto, ContainerInformacoes,TituloApplication,ContainerFotoInformacoes,ContainerGeralSobre,TextApplication,
  ButtonDownload} from './style'
import perfil from '../../imgs/perfil.jpg'
const Sobre = () => {
  return (
    <ContainerSobre> 
        <ContainerGeralSobre>
       
          <ContainerFotoInformacoes>
            <ContainerFoto src= {perfil}></ContainerFoto> 
          </ContainerFotoInformacoes>

          <ContainerInformacoes>
            <TituloApplication>Front end Developer</TituloApplication>
            <TextApplication>
              Formado em análise e desenvolvimento de sistemas e atuando diretamente na construções de websites responsivos,atualmente
              o meu foco está na utilização de React com react-hooks,context-api,styled-components e react-router,mas tambem com conhecimentos no lado do back-end com NodeJS + Express e MongoDB + Mongoose.
            </TextApplication>

            <ButtonDownload>BAIXAR CURRICULO</ButtonDownload>
          </ContainerInformacoes> 

        </ContainerGeralSobre>
    </ContainerSobre>
  )
}

export default Sobre