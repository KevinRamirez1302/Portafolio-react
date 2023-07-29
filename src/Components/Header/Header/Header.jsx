import {
  Section,
  Titulo,
  Img,
  VeneLogo,
  Skills,
  SkillImage,
  ImgContainer,
  Title,
} from "./styles";
import { motion } from "framer-motion";
import { Projects } from "../../Projects/project";
import Git from "../../../assets/IMG/github-mark-white.svg";
import Linkedin from "../../../assets/IMG/linkedin.png";
import Vene from "../../../assets/IMG/venezuela.png";
import Html from "../../../assets/IMG/html-5.png";
import Css from "../../../assets/IMG/css.png";
import Js from "../../../assets/IMG/js.png";
import Bootstrap from "../../../assets/IMG/bootstrap.png";
import Express from "../../../assets/IMG/expressjs-ar21.svg";
import Node from "../../../assets/IMG/nodejs-ar21.svg";
import React from "../../../assets/IMG/react.svg";
import CV from "../../../assets/IMG/cv.png";

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
              style={{ color: "#7FE9DE", fontFamily: "Poppins" }}
            >
              Hi
            </motion.span>
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 1.5 }}
              style={{ color: "#EEEEEE", fontFamily: "Poppins" }}
            >
              , My Name is
            </motion.span>{" "}
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 2.5 }}
              style={{ color: "#7FE9DE", fontFamily: "Poppins" }}
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
              style={{ color: "#7FE9DE", fontFamily: "Poppins" }}
            >
              Front End
            </motion.span>{" "}
            <motion.span
              variants={estilos}
              initial="hidden"
              animate="show"
              transition={{ delay: 3.5 }}
              style={{ color: "#EEEEEE", fontFamily: "Poppins" }}
            >
              Developer
              <VeneLogo whileHover={{ scale: 1.3 }} src={Vene} alt="" />
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
            alt="Github"
          >
            <Img src={Git} alt="" />
          </a>

          <a href="./Curriculum.pdf" rel="noreferrer" target="_blank" download>
            <Img src={CV} alt="Cv" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevindev1302/"
            rel="noreferrer"
            target="_blank"
            alt="Linkedin"
          >
            <Img src={Linkedin} alt="" />
          </a>
        </motion.div>
      </Section>
      <Projects />
      <Skills>
        <Title>Some Skills</Title>
        <ImgContainer>
          <SkillImage src={Html} />
          <SkillImage src={Css} />
          <SkillImage src={Js} />
          <SkillImage src={React} />
          <SkillImage src={Bootstrap} />
          <SkillImage src={Node} />
          <SkillImage style={{ backgroundColor: "white" }} src={Express} />
        </ImgContainer>
      </Skills>
    </>
  );
};
