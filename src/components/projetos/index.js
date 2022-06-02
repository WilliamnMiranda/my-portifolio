import React from 'react'
import ItemProjeto from './itemsprojeto/index'
import {ContainerProjects,TituloMeusProjetos,MeusProjetos,Icon} from './style'
import { FaCode } from "react-icons/fa";
import finance from '../../imgs/finance.png'
const Projects = () => {
  const projects = [
    {
      src: finance,
      alt: 'Projeto de financas'
    }
  ];

  return (
    <ContainerProjects>

        <TituloMeusProjetos>
          <Icon>            
            <FaCode/>
          </Icon>           
          <p>Projects</p>
        </TituloMeusProjetos>

        <MeusProjetos>
          {
            projects.map((item)=>{
              return <ItemProjeto item={item} />
            })
          }
        </MeusProjetos>
    </ContainerProjects>
  )
}

export default Projects