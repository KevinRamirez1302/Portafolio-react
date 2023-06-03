import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background-color: #EEEEEE;
`

export const Ul = styled.ul`
    display: flex;
`

export const Enlace = styled(Link)`
    text-decoration: none;
    margin: .7rem;
    background-color: #00ADB5;
    padding: .4rem .6rem;
    font-weight: bold;
    border-radius: 7px;
    color: #222831;
`

