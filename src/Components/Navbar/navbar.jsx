import {
  Nav,
  Ul,
  Enlace,
  P,
  Span,
  SpanTwo,
  ContainerLogo,
  Hammenu,
  NavSide,
  SideUl,
  SideList,
  SideLink,
} from "./styles";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <Nav animate={isOpen == true ? "open" : "closed"}>
        <motion.div whileHover={{ rotate: 4 }}>
          <ContainerLogo>
            <P to="/">
              <Span>Kevin</Span>
              <SpanTwo>.JS</SpanTwo>
            </P>
          </ContainerLogo>
        </motion.div>
        <Ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ listStyle: "none" }}
          >
            <Enlace to="Projects">Projects</Enlace>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ listStyle: "none" }}
          >
            <Enlace to="/">About Me</Enlace>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ listStyle: "none" }}
          >
            <Enlace
              style={{
                backgroundColor: "#393E46",
                color: "white",
              }}
              to="/"
            >
              Contact Me
            </Enlace>
          </motion.li>
        </Ul>

        <NavSide
          as={motion.nav}
          animate={isOpen ? "open" : "closed"}
          className="menu"
        >
          <motion.div
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hammenu as={motion.div} whileTap={{ scale: 0.9 }}>
              <AiOutlineMenu size={25} onClick={() => setIsOpen(!isOpen)} />
            </Hammenu>
          </motion.div>
          <SideUl
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
          >
            <SideList as={motion.li} variants={itemVariants}>
              <SideLink>Projects</SideLink>
            </SideList>
            <SideList as={motion.li} variants={itemVariants}>
              <SideLink>About Me</SideLink>{" "}
            </SideList>
            <SideList as={motion.li} variants={itemVariants}>
              <SideLink>Contact Me</SideLink>
            </SideList>
          </SideUl>
        </NavSide>
      </Nav>
    </>
  );
};
