import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: center;
  background-color: #222831;
`;

export const VeneLogo = styled(motion.img)`
  width: 3rem;
  margin-left: 1rem;
`;

export const Img = styled.img`
  width: 4rem;
  margin: 1rem;

  @media screen and (max-width: 550px) {
    width: 3rem;
  }
`;

export const Titulo = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  user-select: none;

  @media screen and (max-width: 550px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222831;
  padding: 8% 14%;
`;

export const SkillImage = styled.img`
  width: 10%;
  transition: all ease-in-out 100ms;
  cursor: pointer;
  :hover {
    scale: 1.2;
  }

  @media screen and (max-width: 550px) {
    width: 20%;
  }
`;

export const Title = styled.h3`
  color: white;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 3rem;
`;

export const ImgContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;
