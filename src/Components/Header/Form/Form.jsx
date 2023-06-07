import { TextField } from "@mui/material"
import { Formulario,Section,Button } from "./styles"
import Titulo from "../../Titulo/Titulo"
export const Form = () => {
    return (<>
        <Section>
            <Titulo titulo = 'Contact Me'></Titulo>
                <Formulario action="">
                <TextField style={{margin:15}} id="outlined-basic" label="Nombre" variant="outlined" />
                <TextField style={{margin:15}} id="outlined-basic" label="Email" variant="outlined" />
                <TextField style={{margin:15}} id="outlined-basic" label="Write Me" variant="outlined" />
                <Button>Enviar mensaje</Button>
                </Formulario>
                
        </Section>
    
    </>)
}