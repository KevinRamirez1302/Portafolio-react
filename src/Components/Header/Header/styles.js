import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    justify-content: center;
    background-color: #EEEEEE;
`

export const Img = styled.img `
    width: 4rem;
    margin: 1rem;

    @media screen and (max-width:550px) {
        width: 3rem;
    }
`

export const Titulo = styled.div `
    font-size: 2.4rem;
    font-weight: bold;

    @media screen and (max-width:550px) {
        text-align: center;
        font-size: 1.5rem;
    }
`


