import { Section } from "./styles";
import Titulo from "../../Titulo/Titulo";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const AboutMe = () => {
  const scroll = useRef(null);
  const isInView = useInView(scroll, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView]);

  return (
    <>
      <Section>
        <motion.div
          className="Container"
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.25 }}
          ref={scroll}
        >
          
          <Titulo id='Aboutme' titulo="About Me" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            corrupti ea officiis voluptatibus eos fugiat dolor corporis
            voluptates unde! Cum doloremque quidem impedit. Doloremque quidem
            non quis eos. Molestias, possimus. Rerum illum enim vero? Sunt
            maiores eveniet recusandae qui repudiandae amet expedita veritatis.
            Excepturi non dolores iste impedit corporis velit molestias, vitae a
            temporibus ratione ea ex voluptatum laborum quibusdam.
          </p>
        </motion.div>
      </Section>
    </>
  );
};
