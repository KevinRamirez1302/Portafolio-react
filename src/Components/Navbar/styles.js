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

export const P = styled(Link) `
    text-decoration: none;
    color: black;
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
    @media screen and (max-width: 550px) {

        display: none;
}
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
        background-color: #00ADB5;
        
    }

    @media screen and (max-width: 450px) {

        margin: .1rem;
        padding: .2rem .3rem ;
        background-color: #00ADB5;
        
}
`
export const Hammenu = styled.div`
   display: none;

   @media screen and (max-width: 550px) {

       display: block;
       cursor: pointer;

}
`



export const NavSide = styled.nav`
    position: absolute;

@media screen and (max-width: 550px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center
    
}
   

`




export const SideUl = styled.ul `
display: none;
@media screen and (max-width:550px) {
    display: block;
    text-align: center;
    
    }
 
        
`
export const SideList = styled.li`
@media screen and (max-width:550px) {
    list-style: none;
    padding: .4rem;
    
    }
   
`

export const SideLink = styled(Link)`
@media screen and (max-width:550px) {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color:#047467;
    font-size: large;
    }
  

`