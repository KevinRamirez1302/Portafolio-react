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
    
`
export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
`

export const P = styled.p `
    
`

export const Span = styled.span `
   font-family: 'Montserrat', sans-serif;
    font-size: 1rem

`

export const SpanTwo = styled.span `
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    color: #00ADB5;
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
    color: white;

    @media screen and (max-width: 450px) {

        margin: .1rem;
        padding: .2rem .3rem ;
        background-color: #EEEEEE;
    }
`

