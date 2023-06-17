import { Section,SkillsContainer,ImgContainer,Img,Container,ItemContainer } from "./styles";
import Titulo from "../../Titulo/Titulo";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import java from '../../../assets/img/js.png'
import Html from '../../../assets/IMG/html-5.png'
import Css from '../../../assets/IMG/css.png'
import ReactLogo from '../../../assets/react.svg'
import TypeLogo from '../../../assets/IMG/typescript.png'
import Git from '../.././../assets/IMG/git.png'
import Boots from '../../../assets/IMG/bootstrap.png'
import Vite from '../../../assets/IMG/vitejs.svg'
import { BsStarFill } from 'react-icons/bs'


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
        <Container
          as={motion.div}
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
        </Container>
        <SkillsContainer>
        <Titulo titulo ='Skills'></Titulo>
            <ImgContainer>
                <ItemContainer>
                  <Img src={Html} alt="Html" />
                </ItemContainer>
                <ItemContainer>
                   <Img src={Css} alt="CSS" />
                </ItemContainer>
                <ItemContainer>
                    <Img src={java} alt="Javascript" />
                </ItemContainer>
                <ItemContainer>
                  <Img src= {ReactLogo} alt="React" />
                </ItemContainer>
                <ItemContainer>
                  <Img src={TypeLogo} alt="Typescript"/>
                </ItemContainer>
                <ItemContainer>
                  <Img src={Git} alt="Typescript"/>
                </ItemContainer>
                <ItemContainer>
                  <Img src={Boots} alt="Typescript"/>
                </ItemContainer>
                <ItemContainer>
                  <Img src={Vite} alt="Typescript"/>
                </ItemContainer>
                
            </ImgContainer>
        
        </SkillsContainer>
      </Section>
    </>
  );
};
