import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    justify-content: center;
    background-color: #EEEEEE;
`

export const Titulo = styled.div `
    font-size: 2.4rem;
    font-weight: bold;

    @media screen and (max-width:450px) {
        text-align: center;
        
    }
`