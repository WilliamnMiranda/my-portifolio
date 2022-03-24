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
        <img src = {GitHub} alt = "GitHub"/>
        <img src = {Linkedin} alt = "Linkedin"/>
        <img src = {Wpp} alt = "Wpp"/>
   </Contatos>
 </ContainerContato>
  )
}

export default Contato