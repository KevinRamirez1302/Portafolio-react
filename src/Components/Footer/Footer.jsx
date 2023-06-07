import { Form } from "../Header/Form/Form"
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { Section,Datos,Iconos,Parrafo } from "./styles"

export const Footer = () => {
    return(<>
    
        <Section>
            <Form />
            <Datos>
               <Parrafo>Email: Kevin.alexanderra1302@gmail.com</Parrafo> 
               <Parrafo>Phone: +58 414-574-3920</Parrafo>
            </Datos>
            <Iconos>
            <BsLinkedin color="blue" size={50} />
            <BsGithub size={50} />
            </Iconos>
        </Section>
    
    </>)
}