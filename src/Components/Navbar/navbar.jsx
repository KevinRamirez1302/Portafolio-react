import { Nav,Ul,Enlace,P,Span, SpanTwo,ContainerLogo,Hammenu, Sidebar } from "./styles"
import { motion } from "framer-motion"
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react"


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const Menu = () => {
         setIsOpen(!isOpen)
         
    }

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
            <Hammenu as={motion.div} whileHover={{rotate:180}} >
                <AiOutlineMenu size={25} onClick={() => Menu()}/>
            </Hammenu>
                    {isOpen == true ? <Sidebar as={motion.div} initial={{y: -20}}   animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }} >
                <ul>
                    <li>Projects</li>
                    <li>Contact Me</li>
                    <li>About me</li>
                </ul>
            </Sidebar> : <></>}       
        </Nav>
    
    </>
}