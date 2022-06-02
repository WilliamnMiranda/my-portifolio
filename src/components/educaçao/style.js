import styled from "styled-components";

export const ContainerTimeLine = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  @media (max-width: 800px) {
    p {
      display: none;
    }
  }
`;
export const Icon = styled.div`
  font-size: 4em;
  margin: 0px;
  padding: 0px;
  color: #5b5ce2;
`;
export const TituloTimeLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2em;
    margin: 0px;
  }
`;
