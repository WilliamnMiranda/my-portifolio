import styled from "styled-components";
export const ContainerSobre = styled.section`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`
export const ContainerGeralSobre = styled.article`
    color:white;
    display: flex;
    width: 70%;
    @media (max-width: 1300px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
    }
    @media (max-width : 800px){
        flex-direction: column;
        width: 100%;
    }
`
export const ContainerFotoInformacoes = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    @media (max-width : 1300px){
        width: 100%;
    }
    @media (max-width : 800px){
        width: 100%;
    }
`

export const ContainerFoto = styled.img`
    height: 350px;
    width:  350px;
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    object-fit: cover;
    object-position: centser;
`
export const ContainerInformacoes = styled.div`
    width: 50%;
    @media (max-width : 1300px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width : 800px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
`
export const TituloApplication = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');
    font-weight: 100;
    font-style: italic;
    font-size: 3.5em;
    font-family: 'Hurricane', cursive;
    background-clip: text;
    @media (max-width : 800px){
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.2em;
    }
`

export const TextApplication = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Inspiration&display=swap');
    font-style: italic;
    color:rgba(255,255,255,0.7);
    font-family: 'Inspiration', cursive;
    font-size: 1.2em;
    letter-spacing: .2rem;

    @media (max-width : 800px){
        box-sizing: border-box;
        padding: 10px;
        text-align: justify;
        letter-spacing: 0rem;
        font-size: 1.0em;
    }
`
export const ButtonDownload = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    font-family: 'Open Sans', sans-serif;
    width: 200px;
    color:white;
    background-color: #5b5ce2;
    border: none;
    height: 50px;
    border-radius: 20px;
    font-size: 0.9em;
    cursor: pointer;
    margin-top: 20px;
    @media (max-width : 800px){
        width: 90%;
    }
`

