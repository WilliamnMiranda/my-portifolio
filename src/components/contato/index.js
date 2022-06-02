import React from 'react'
import {ContainerContato,TituloMeusContatos,Icon,Contatos} from './style'
import { FaHome } from "react-icons/fa";
import GitHub from '../../imgs/github-icon-1.svg'
import Linkedin from '../../imgs/linkedin-icon.svg'
import Wpp from '../../imgs/whatsapp-3.svg'
const Contato = () => {
  return (
    <ContainerContato>
    <TituloMeusContatos>
       <Icon>  
         <FaHome/>           
       </Icon>           
       <p>Contato</p>
     </TituloMeusContatos>
   <Contatos>
        <a href="https://github.com/WilliamnMiranda" target="_blank" rel="noreferrer">
          <img src = {GitHub} alt = "GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/williamnm/" target="_blank">
          <img src = {Linkedin} alt = "Linkedin"/>
        </a>
        <a href="https://contate.me/williamdev" target="_blank">
          <img src = {Wpp} alt = "Wpp"/>
        </a>
   </Contatos>
 </ContainerContato>
  )
}

export default Contato