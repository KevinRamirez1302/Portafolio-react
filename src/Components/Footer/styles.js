import styled from "styled-components";

export const Section = styled.section`
  background-color: #00adb5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 4rem;
  @media screen and (max-width: 550px) {
  }
`;
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Parrafo = styled.p`
  margin: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const Datos = styled.div`
  color: white;
  @media screen and (max-width: 550px) {
  }
`;

export const Iconos = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 3rem;
  margin: 1rem;
`;

export const Logo = styled.img`
  width: 8rem;
  border-radius: 10px;
`;
