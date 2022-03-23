import React from 'react'
import {ContainerTimeLine,TituloTimeLine,Icon} from './style'
import ItemTimeLine  from './itemTimeLine'
import { FaSchool } from "react-icons/fa";
const TimeLine = () => {
  return (
    <ContainerTimeLine>
        <TituloTimeLine>
          <Icon> <FaSchool/>  </Icon>
           <p>  Educação </p>

        </TituloTimeLine>

        <div>
          <ItemTimeLine/>
        </div>
    </ContainerTimeLine>
  )
}

export default TimeLine