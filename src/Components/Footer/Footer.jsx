import { Form } from "../Header/Form/Form"
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { Section,Datos,Iconos } from "./styles"

export const Footer = () => {
    return(<>
    
        <Section>
            <Form />
            <Datos>
               <p>Email:Kevin.alexanderra1302@gmail.com</p> 
               <p>Phone:+58 414-574-3920</p>
            </Datos>
            <Iconos>
            <BsLinkedin color="blue" size={50} />
            <BsGithub size={50} />
            </Iconos>
        </Section>
    
    </>)
}