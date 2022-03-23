import styled from "styled-components";
import { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-50px);
  }
`

export const ContainerGeralSkills = styled.section`
display: flex;
flex-direction: column;
margin-top: 20px;
`
export const ContainerSkills = styled.article`
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    img {
        width: 90px;
        height: 90px;
        margin-left: 25px;
        position: relative;
        animation: 2s linear infinite alternate ${rotate};;
        &:first-child{
            margin-left: 0px;
        }
        :nth-child(1) {animation: 1s linear 0.1s infinite alternate ${rotate};}
        :nth-child(2) {animation: 1s linear 0.3s infinite alternate ${rotate};}
        :nth-child(3) {animation: 1s linear 0.6s infinite alternate ${rotate};}
        :nth-child(4) {animation: 1s linear 0.9s infinite alternate ${rotate};}
        :nth-child(5) {animation: 1s linear 1.2s infinite alternate ${rotate};}
        :nth-child(6) {animation: 1s linear 1.5s infinite alternate ${rotate};}
        :nth-child(7) {animation: 1s linear 1.8s infinite alternate ${rotate};}
        :nth-child(8) {animation: 1s linear 2.1s infinite alternate ${rotate};}
        :nth-child(9) {animation: 1s linear  2.4s  infinite alternate ${rotate};}
    }
`

export const TituloMeusProjetos = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
p{
    font-size: 2.0em;
    margin:0px;
}
`

export const Icon = styled.div`
    font-size:4.0em;
    margin:0px;
    padding:0px;
    color:#5b5ce2;
`