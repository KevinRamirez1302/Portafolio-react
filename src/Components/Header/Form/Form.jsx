import { TextField } from "@mui/material";
import { Formulario, Section, Button,Div } from "./styles";
import Titulo from "../../Titulo/Titulo";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";


export const Form = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();


  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView]);

  return (
    <>
      <Section>
        <Div as={motion.div}
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.25 }}
          ref={ref}
        >
          <Titulo titulo="Contact Me"></Titulo>
          <Formulario onSubmit={(e) => {
            e.preventDefault()
          
          }} action="">
            <TextField
              style={{ margin: 15 }}
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
            />
            <TextField
              style={{ margin: 15 }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              style={{ margin: 15 }}
              id="outlined-basic"
              label="Write Me"
              variant="outlined"
            />
            <Button whileTap={{ scale: 0.9 }} as={motion.button} >Enviar mensaje</Button>
          </Formulario>
        
        </Div>
      </Section>
    </>
  );
};
