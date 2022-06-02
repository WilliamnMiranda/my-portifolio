import styled from "styled-components"

export const Item = styled.div`
width: 45%;
background-color: red;
height: 300px;
margin-right: 20px;
margin-bottom: 20px;
    @media (max-width : 800px){
        height: 200px;
        margin: 0 auto;
        width: 95%;
        margin-bottom: 20px;
    }
`