import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 1.5rem 2rem;
  }
`;
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
    width: 50%;
    margin: auto;
    padding: .5rem 1.5rem;
    border: none;
    background-color: #00ADB5;
    color: white;
`

export const Div = styled.div`
    width: 40%;
  @media screen and (max-width:550px) {
    width: 90%;
  }
`

