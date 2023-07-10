import styled from "styled-components";

export const Titulo = styled.h2`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #a6e3e9;
  font-size: 2.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #222831;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2% 3%;
`;

export const Title = styled.a`
  margin: 1rem;
  font-family: "Montserrat";
  color: #333333;
  text-align: center;
  text-decoration: none;
  text-decoration: none;
`;

export const P = styled.p`
  color: #737373;
  font-weight: 600;
  font-family: "Montserrat";
  margin: 5px;
  padding: 3px;
`;

export const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  margin: 1rem;
  background-color: #eeeeee;
  padding: 0.3rem 0.1rem 1rem 0.1rem;
  border-radius: 10px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const Tecnologias = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  text-align: center;
`;

export const Img = styled.img`
  width: 90%;
  border-radius: 10px;
`;
