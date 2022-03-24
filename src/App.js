import React from "react"
import Sobre from "./components/sobre/index";
import { createGlobalStyle } from 'styled-components';
import Header from "./components/header/index";
import Projects from "./components/projetos/index";
import TimeLine from "./components/educaçao/index";
import Skills from './components/tecnologias/index'
import Contato from "./components/contato/index";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0d0d0d;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color:white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Sobre/>
      <Projects/>
      <TimeLine/>
      <Skills/>
      <Contato/>
    </> 
  );
}

export default App;
