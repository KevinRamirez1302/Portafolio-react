import Card from "./Card/Card";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Proyectos } from "./styles";

const Projects = () => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  function Image(foto, name) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <>
        <Card src={foto} alt={name} />
        <motion.h2 style={{ y }}></motion.h2>
      </>
    );
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      {Proyectos.map(({ name, foto }) => {
        Image(name, foto);
      })}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

export default Projects;
