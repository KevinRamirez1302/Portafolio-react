import styled from "styled-components";
import "../../../App.css";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: auto;
  background-color: #eeeeee;
  padding: 0 0 10rem 0;

  @media screen and (max-width: 550px) {
    padding: 0;
    flex-direction: column;
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 50%;
  text-align: center;
  @media screen and (max-width: 450px) {
    width: 80%;
    text-align: justify;
  }
`;

export const SkillsContainer = styled.div`
  width: 50%;
  text-align: center;
  margin: 3rem 0 0 0;
  @media screen and (max-width: 550px) {
    width: 80%;
    text-align: center;
  }
`;
export const Img = styled.img`
  width: 5rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
