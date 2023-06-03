import { TextField } from "@mui/material"
import { Formulario,Section,Titulo } from "./styles"

export const Form = () => {
    return (<>
        <Section>
            <Titulo>Contact Me</Titulo>
                <Formulario action="">
                <TextField style={{margin:15}} id="filled-basic" label="Nombre" variant="filled" />
                <TextField style={{margin:15}} id="filled-basic" label="Email" variant="filled" />
                <TextField style={{margin:15}} id="filled-basic" label="Write Me" variant="filled" />
                </Formulario>
        </Section>
    
    </>)
}