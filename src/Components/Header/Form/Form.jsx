import { TextField } from "@mui/material";
import { HiArrowRight } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import {
  Formulario,
  Section,
  Button,
  Div,
  Container,
  Img,
  Contact,
  H3,
} from "./styles";
import Linkedin from "../../../assets/IMG/linkedin.png";
import Github from "../../../assets/IMG/github-mark.png";
import Titulo from "../../Titulo/Titulo";
import CV from "../../../assets/IMG/cv.png";
import { motion } from "framer-motion";

export const Form = () => {
  return (
    <>
      <Section>
        <Div>
          <Titulo titulo="Contact Me"></Titulo>
          <Formulario
            action="https://formsubmit.co/kevin.alexanderra1302@gmail.com"
            method="POST"
          >
            <TextField
              style={{ margin: 15 }}
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              name="Name"
            />
            <TextField
              style={{ margin: 15 }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="Email"
            />
            <TextField
              style={{ margin: 15 }}
              id="outlined-basic"
              label="Write Me"
              variant="outlined"
              name="Message"
            />
            <Button type="submit" whileTap={{ scale: 0.9 }} as={motion.button}>
              Shoot Me <HiArrowRight size={20} />
            </Button>
          </Formulario>
        </Div>
        <Container>
          <H3 href="mailto:kevin.alexanderra1302@gmail.com">
            <CgMail size={20} />
            Kevin.alexanderra1302@gmail.com
          </H3>
          <Contact>
            <a
              href="https://www.linkedin.com/in/kevindev1302/"
              rel="noreferrer"
              target="_blank"
            >
              <Img src={Linkedin} />
            </a>

            <a
              href="./Curriculum.pdf"
              rel="noreferrer"
              target="_blank"
              download
            >
              <Img src={CV} alt="Cv" />
            </a>
            <a
              href="https://github.com/KevinRamirez1302"
              rel="noreferrer"
              target="_blank"
            >
              <Img src={Github} />
            </a>
          </Contact>
        </Container>
      </Section>
    </>
  );
};
