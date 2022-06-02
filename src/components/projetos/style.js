import styled from "styled-components";

export const ContainerProjects = styled.section`
    margin: 0 auto;
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    @media (max-width : 800px){
        width: 100%;
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

export const MeusProjetos = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%; 
`
export const Icon = styled.div`
    font-size:4.0em;
    margin:0px;
    padding:0px;
    color:#5b5ce2;
`