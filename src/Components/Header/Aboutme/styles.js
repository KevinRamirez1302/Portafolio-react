import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: #EEEEEE;
`

export const Div = styled.div `
    width: 50%;
    text-align: center;
    @media screen and (max-width: 450px){
        width: 80%;
        text-align: justify;
    }
`