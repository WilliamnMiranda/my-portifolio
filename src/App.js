import React from "react"
import Sobre from "./components/sobre/index";
import { createGlobalStyle } from 'styled-components';
import Projects from "./components/projetos/index";
import TimeLine from "./components/educaçao/index";
import Skills from './components/tecnologias/index'
import Contato from "./components/contato/index";
import Cc from './imgs/cc.gif'
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color:white;
    background-color: black;
    background-image:url(${Cc});
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Sobre/>
      <Projects/>
      <TimeLine/>
      <Skills/>
      <Contato/>
    </> 
  );
}

export default App;
