import { Section,Datos,Iconos,Parrafo,FormContainer,Img } from "./styles"
import Linkedin from '../../assets/IMG/linkedin.png'
import Git from '../../assets/IMG/git.png'

import { Form } from "../Header/Form/Form"

export const Footer = () => {
    return(<>
        <FormContainer>
            <Form />
        </FormContainer>
        
        <Section>  
            <Datos>
               <Parrafo>Email: Kevin.alexanderra1302@gmail.com</Parrafo> 
               <Parrafo>Phone: +58 414-574-3920</Parrafo>
            </Datos>
            <Iconos>
                <Img src={Git} alt="" />
                <Img src={Linkedin} alt="" />
            </Iconos>
        </Section>
        
    </>)
}