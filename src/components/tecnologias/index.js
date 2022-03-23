import React from 'react'
import { ContainerSkills,ContainerGeralSkills,TituloMeusProjetos,Icon} from './style'
import { FaDev } from "react-icons/fa";
import Css from '../../imgs/css-3.svg'
import Html from '../../imgs/html-1.svg'
import JavaScript from '../../imgs/javascript-1.svg'
import Node from '../../imgs/nodejs-1.svg'
import Mongo from '../../imgs/mongodb-icon-1.svg'
import ReactSvg from '../../imgs/react-2.svg'
import Mongoose from '../..//imgs/mongoose-1.svg'
import Express from '../..//imgs/express-109.svg'
import Bootstrap from '../..//imgs/bootstrap-4.svg'
const Skills = () => {
  return (
    <ContainerGeralSkills>
         <TituloMeusProjetos>
            <Icon>             
             <FaDev/>
            </Icon>           
            <p>Projects</p>
          </TituloMeusProjetos>
        <ContainerSkills>
            <img src = {Html} alt = "html"/>
            <img src= {Css} alt = "css"/>
            <img src = {JavaScript} alt = "JavaScript"/>
            <img src ={ReactSvg} alt = "react"/>
            <img src ={Node} alt = "node"/>
            <img src ={Mongo} alt = "mongo"/>
            <img src ={Mongoose} alt = "mongoose"/>
            <img src ={Express} alt = "mongoose"/>
            <img src ={Bootstrap} alt = "mongoose"/>
        </ContainerSkills>
      </ContainerGeralSkills>
  )
}

export default Skills