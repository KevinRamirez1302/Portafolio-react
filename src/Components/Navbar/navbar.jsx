import { Nav,Ul,Enlace,P,Span, SpanTwo,ContainerLogo } from "./styles"
import { motion } from "framer-motion"

export const Navbar = () => {
    return <>
    
        <Nav>
            <motion.div
            whileHover={{rotate:4}}
            >
                <ContainerLogo>
                    <P><Span>Kevin</Span><SpanTwo>.JS</SpanTwo></P>
                </ContainerLogo>
            </motion.div>
            <Ul>
                <motion.li whileHover={{
                    scale:1.1,
                }} style={{listStyle:'none'}}><Enlace href="/proyectos">Projects</Enlace></motion.li>
                <motion.li whileHover={{
                    scale:1.1,
                }} style={{listStyle:'none'}}><Enlace href="/aboutMe">About Me</Enlace></motion.li>
                <motion.li whileHover={{
                    scale:1.1,
                }} style={{listStyle:'none'}}><Enlace style={{
                    backgroundColor:'#393E46',color:'white'}} href="/contacto">Contact Me</Enlace></motion.li>
            </Ul>
        </Nav>
    
    </>
}