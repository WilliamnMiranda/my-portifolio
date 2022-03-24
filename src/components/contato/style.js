import styled from "styled-components"

export const ContainerContato = styled.section`
   margin: 0 auto;
    display: flex;
    width: 70%;
    margin-bottom: 20px;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`
export const TituloMeusContatos = styled.article`
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

export const Contatos = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%; 

    img {
        width: 90px;
        height: 90px;
        margin-left: 25px;
        position: relative;
        margin-left:60px;
        cursor:pointer;
        &:first-child{
            margin-left: 0px;
        }
    }
`