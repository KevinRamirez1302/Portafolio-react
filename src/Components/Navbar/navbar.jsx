import { Nav, Ul, Enlace, P, Span, SpanTwo, ContainerLogo } from "./styles";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <motion.div whileHover={{ rotate: 4 }}>
          <ContainerLogo>
            <P to="/">
              <Span>Kev.</Span>
              <SpanTwo>Dev</SpanTwo>
            </P>
          </ContainerLogo>
        </motion.div>
        <Ul>
          <motion.li
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ listStyle: "none" }}
          >
            <Enlace whileTap={{ backgroundColor: "white" }} to="/ContactMe">
              Contact Me
            </Enlace>
          </motion.li>
        </Ul>
      </Nav>
    </>
  );
};
