import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem 1rem 4rem;
  background-color: #222831;
  align-items: center;

  @media screen and( max-width: 550px) {
    padding: 1rem 0;
    align-items: center;
    justify-content: center;
  }
`;
export const MyLogo = styled.img``;
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const P = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: white;
  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

export const SpanTwo = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #00adb5;
  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Enlace = styled(motion(Link))`
  appearance: button;
  background-color: #00adb5;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;

  ::after {
    background-clip: padding-box;
    background-color: #1b6b93;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  :focus {
    user-select: auto;
  }

  :disabled {
    cursor: auto;
  }

  @media screen and (max-width: 450px) {
    margin: 0.1rem;
    padding: 0.2rem 0.3rem;
    background-color: #00adb5;
  }

  @media screen and (max-width: 450px) {
    margin: 0.1rem;
    padding: 0.2rem 0.3rem;
    background-color: #00adb5;
  }
`;
