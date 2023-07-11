import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 3rem 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #eeeeee;
  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 4rem 2rem;
    flex-direction: column;
  }
`;
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 50%;
  margin: auto;
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: #00adb5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Div = styled.div`
  width: 40%;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

// DATOS

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 550px) {
  }
`;

export const H3 = styled.a`
  font-family: "Montserrat";
  font-size: 1.2rem;
  margin: 3rem;
  text-decoration: none;
  color: #737373;
  display: flex;
  align-items: center;
  @media screen and (max-width: 550px) {
    margin: 0.8rem;
  }
`;

export const Img = styled.img`
  width: 4rem;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-around;
`;
