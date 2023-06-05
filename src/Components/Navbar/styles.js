import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background-color: #EEEEEE;

    @media screen and( max-width: 450px){
        padding: 1rem;
        align-items: center;
        justify-content: center;
    }
`
export const MyLogo = styled.img `
    width: 2.5rem;
`

export const P = styled.p `
    
`

export const Span = styled.span `
    

`

export const SpanTwo = styled.span `
    font-weight: bold;
`

export const Ul = styled.ul`
    display: flex;
`

export const Enlace = styled(Link)`
    text-decoration: none;
    margin: .7rem;
    background-color: #00ADB5;
    padding: .4rem 1.5rem;
    font-weight: bold;
    border-radius: 4px;
    color: #222831;

    @media screen and (max-width: 450px) {

        margin: .1rem;
        padding: .2rem .3rem ;
        background-color: #EEEEEE;
    }
`

