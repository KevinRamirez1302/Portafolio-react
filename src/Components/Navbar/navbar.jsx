import { Nav,Ul,Enlace,P,Span, SpanTwo } from "./styles"
export const Navbar = () => {
    return <>
    
        <Nav>
            <div>
                <P><Span>Kevin</Span><SpanTwo>.JS</SpanTwo></P>
            </div>

            <Ul>
                <li style={{listStyle:'none'}}><Enlace href="/proyectos">Projects</Enlace></li>
                <li style={{listStyle:'none'}}><Enlace href="/aboutMe">About Me</Enlace></li>
                <li style={{listStyle:'none'}}><Enlace style={{
                    backgroundColor:'#393E46',color:'white'}} href="/contacto">Contact Me</Enlace></li>
            </Ul>
        </Nav>
    
    </>
}