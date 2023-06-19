import { Section, Titulo, Img } from "./styles";
import { AboutMe } from "../Aboutme/aboutMe";
import { Footer } from "../../Footer/Footer";
import { motion } from "framer-motion";
import Git from "../../../assets/IMG/git.png";
import Linkedin from "../../../assets/IMG/linkedin.png";

export const Header = () => {
  const estilos = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <Section>
        <Titulo>
          <h1 style={{ fontFamily: "Poppins" }}>
            {" "}
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.5 }}
              style={{ color: "#00ADB5", fontFamily: "Poppins" }}
            >
              Hi
            </motion.span>
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 1.5 }}
              style={{ fontFamily: "Poppins" }}
            >
              , My Name is
            </motion.span>{" "}
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 2.5 }}
              style={{ color: "#00ADB5", fontFamily: "Poppins" }}
            >
              Kevin
            </motion.span>
          </h1>
          <h2 style={{ fontFamily: "Poppins" }}>
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 3.5 }}
              style={{ color: "#00ADB5", fontFamily: "Poppins" }}
            >
              Front End
            </motion.span>{" "}
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 3.5 }}
              style={{ fontFamily: "Poppins" }}
            >
              Developer
            </motion.span>
          </h2>
        </Titulo>
        <motion.div
          variants={estilos}
          initial="hidden"
          animate="show"
          transition={{ delay: 4.5 }}
        >
          <a
            href="https://github.com/KevinRamirez1302"
            rel="noreferrer"
            target="_blank"
          >
            <Img src={Git} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevindev1302/"
            rel="noreferrer"
            target="_blank"
          >
            <Img src={Linkedin} alt="" />
          </a>
        </motion.div>
      </Section>
      <AboutMe />
      <Footer />
    </>
  );
};
