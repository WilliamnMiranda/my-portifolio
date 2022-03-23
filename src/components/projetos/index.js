import React from 'react'
import ItemProjeto from './itemsprojeto/index'
import {ContainerProjects,TituloMeusProjetos,MeusProjetos,Icon} from './style'
import { FaCode } from "react-icons/fa";
const Projects = () => {
  return (
    <ContainerProjects>

        <TituloMeusProjetos>
          <Icon>            
            <FaCode/>
          </Icon>           
          <p>Projects</p>
        </TituloMeusProjetos>

        <MeusProjetos>
          <ItemProjeto/>
          <ItemProjeto/>
          <ItemProjeto/>
          <ItemProjeto/>
        </MeusProjetos>
    </ContainerProjects>
  )
}

export default Projects