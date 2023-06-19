import {
  Section,
  Datos,
  Iconos,
  Parrafo,
  FormContainer,
  Img,
  Logo,
} from "./styles";
import Linkedin from "../../assets/IMG/linkedin.png";
import Git from "../../assets/IMG/git.png";
import LogoMy from "../../assets/Ke.Dev.png";
import { motion } from "framer-motion";
import { Form } from "../Header/Form/Form";

export const Footer = () => {
  return (
    <>
      <FormContainer>
        <Form />
      </FormContainer>

      <Section>
        <Logo src={LogoMy} />
        <Datos>
          <Parrafo>Email: Kevin.alexanderra1302@gmail.com</Parrafo>
          <Parrafo>Phone: +58 414-574-3920</Parrafo>
        </Datos>
        <Iconos>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://github.com/KevinRamirez1302"
              rel="noreferrer"
              target="_blank"
            >
              <Img src={Git} alt="" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://www.linkedin.com/in/kevindev1302/"
              rel="noreferrer"
              target="_blank"
            >
              <Img src={Linkedin} alt="" />
            </a>
          </motion.div>
        </Iconos>
      </Section>
    </>
  );
};
