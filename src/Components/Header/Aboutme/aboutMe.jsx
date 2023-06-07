import { Section,Div } from "./styles"
import Titulo from "../../Titulo/Titulo"
import { useRef } from "react"
export const AboutMe = () => {
    const scroll = useRef(null)
    return <>
        <Section ref={scroll}>
            <Div>
                <Titulo titulo = 'About Me' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, corrupti ea officiis voluptatibus eos fugiat dolor corporis voluptates unde! Cum doloremque quidem impedit. Doloremque quidem non quis eos. Molestias, possimus.
                Rerum illum enim vero? Sunt maiores eveniet recusandae qui repudiandae amet expedita veritatis. Excepturi non dolores iste impedit corporis velit molestias, vitae a temporibus ratione ea ex voluptatum laborum quibusdam.</p>
            </Div>
        </Section>
    
    
    </>
} 