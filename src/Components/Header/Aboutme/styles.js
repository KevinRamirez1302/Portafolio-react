import styled from "styled-components";
import '../../../App.css'


export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: #EEEEEE;
    
    @media screen and (max-width:550px) {
        flex-direction: column;
        width: 100%;
    }
`

export const Div = styled.div `
    width: 50%;
    text-align: center;
    @media screen and (max-width:550px) {
        width: 80%;
        text-align: center;
    }
`