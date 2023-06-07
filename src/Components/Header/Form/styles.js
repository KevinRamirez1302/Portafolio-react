import styled from "styled-components";

export const Section = styled.section`
  width: 40%;
  padding: 4rem 7rem;
  @media screen and (max-width: 450px) {
    width: 80%;
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

