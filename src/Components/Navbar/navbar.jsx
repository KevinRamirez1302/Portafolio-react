import {
  Nav,
  Ul,
  Enlace,
  P,
  Span,
  SpanTwo,
  ContainerLogo,
  Hammenu,
  Sidebar,
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
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const Menu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
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
            whileHover={{
              scale: 1.1,
            }}
            style={{ listStyle: "none" }}
          >
            <Enlace to="Projects">Projects</Enlace>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
            style={{ listStyle: "none" }}
          >
            <Enlace to="/">About Me</Enlace>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
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
        <Hammenu as={motion.div} whileTap={{ scale: 0.90 }}>
          <AiOutlineMenu size={25} onClick={() => Menu()} />
        </Hammenu>
        {isOpen == true ? (
          <Sidebar
            as={motion.div}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <SideUl
                variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                      }
                    },
                    closed: {
                      clipPath: "inset(10% 50% 90% 50% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                      }
                    }
                  }}
            >
              <SideList as={motion.li} variants={itemVariants} >
                <SideLink to="Projects">Projects</SideLink>
              </SideList>
              <SideList as={motion.li} variants={itemVariants}>
                <SideLink>About Me</SideLink>
              </SideList>
              <SideList as={motion.li} variants={itemVariants}>
                <SideLink>Contact Me</SideLink>
              </SideList>
            </SideUl>
          </Sidebar>
        ) : (
          <></>
        )}
      </Nav>
    </>
  );
};
