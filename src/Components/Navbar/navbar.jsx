import { Nav,Ul,Enlace } from "./styles"
export const Navbar = () => {
    return <>
    
        <Nav>
            <div>
                <p><span>Kevin</span>.JS</p>
            </div>

            <Ul>
                <li style={{listStyle:'none'}}><Enlace href="/proyectos">Projects</Enlace></li>
                <li style={{listStyle:'none'}}><Enlace href="/aboutMe">About Me</Enlace></li>
                <li style={{listStyle:'none'}}><Enlace href="/contacto">Contact Me</Enlace></li>
            </Ul>
        </Nav>
    
    </>
}