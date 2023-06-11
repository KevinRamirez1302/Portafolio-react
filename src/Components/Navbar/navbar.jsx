import { Nav,Ul,Enlace,P,Span, SpanTwo,ContainerLogo,Hammenu } from "./styles"
import { motion } from "framer-motion"
import {AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {
    return <>
    
        <Nav>
            <motion.div
            whileHover={{rotate:4}}
            >
                <ContainerLogo>
                    <P to="/"><Span>Kevin</Span><SpanTwo>.JS</SpanTwo></P>
                </ContainerLogo>
            </motion.div>
            <Ul>
                <motion.li whileHover={{
                    scale:1.1,
                }} style={{listStyle:'none'}}><Enlace to="Projects">Projects</Enlace></motion.li>
                <motion.li whileHover={{
                    scale:1.1,
                }} style={{listStyle:'none'}}><Enlace to="#Aboutme">About Me</Enlace></motion.li>
                <motion.li whileHover={{
                    scale:1.1,
                }} style={{listStyle:'none'}}><Enlace style={{
                    backgroundColor:'#393E46',color:'white'}} to="/">Contact Me</Enlace></motion.li>
            </Ul>
            <Hammenu>
                <AiOutlineMenu />
            </Hammenu>
        </Nav>
    
    </>
}