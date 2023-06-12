import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEEEEE ;
    padding: 2rem 4rem;
`
export const Parrafo = styled.p `
    margin: 1rem;
    font-family: 'Poppins', sans-serif;
`

export const Datos = styled.div `
    padding: 4rem 7rem;
    text-align: center;
    @media screen and (max-width:550px) {
        padding: 2rem 2rem;
    }
`

export const Iconos = styled.div `
width: 20%;
    display: flex;
    justify-content: space-between;
`