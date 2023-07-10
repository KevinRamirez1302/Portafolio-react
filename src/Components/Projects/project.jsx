import {
  Titulo,
  Container,
  Div,
  Tecnologias,
  Img,
  Title,
  P,
  Section,
} from "./styles";
import AluraGeek from "../../assets/projects/AluraGeek.png";
import Encriptador from "../../assets/projects/Encriptador.png";
import AluraFlix from "../../assets/projects/PortafolioReact.png";
import NewsLetter from "../../assets/projects/NewsLetter.png";
import Furnishop from "../../assets/projects/Furnishop.png";
import DrumKit from "../../assets/projects/DrumKit.png";

export const Projects = () => {
  return (
    <>
      <Section>
        <Titulo>Projects</Titulo>
        <Container>
          <Div>
            <Img src={AluraGeek} alt="AaluraGeek" />
            <Title href="https://kevinramirez1302.github.io/AlurGeek/">
              AluraGeek
            </Title>

            <Tecnologias>
              <P>Html</P>
              <P>Css</P>
              <P>Javascrip</P>
            </Tecnologias>
          </Div>
          <Div>
            <Img src={Encriptador} alt="Encriptador" />
            <Title href="https://kevinramirez1302.github.io/Encriptador-one/">
              Encriptador
            </Title>
            <Tecnologias>
              <P>Html</P>
              <P>Css</P>
              <P>Javascrip</P>
            </Tecnologias>
          </Div>
          <Div>
            <Img src={Furnishop} alt="FurniShop" />
            <Title>FurniShop</Title>
            <Tecnologias>
              <P>Html</P>
              <P>Css</P>
              <P>Javascrip</P>
            </Tecnologias>
          </Div>
          <Div>
            <Img src={DrumKit} alt="DrumKit" />
            <Title href="https://kevinramirez1302.github.io/Drumkit/">
              DrumKit
            </Title>
            <Tecnologias>
              <P>Html</P>
              <P>Css</P>
              <P>Javascrip</P>
            </Tecnologias>
          </Div>
          <Div>
            <Img src={AluraFlix} alt="AluraFlix" />
            <Title href="https://nesflix-v1.vercel.app/">AluraFlix</Title>
            <Tecnologias>
              <P>Html</P>
              <P>Javascript</P>
              <P>React</P>
              <P>StyledComponent</P>
              <P>Router-dom</P>
              <P>Material UI </P>
            </Tecnologias>
          </Div>
          <Div>
            <Img src={NewsLetter} alt="NewsLetter" />
            <Title>NewsLetter</Title>
            <Tecnologias>
              <P>Html</P>
              <P>Css</P>
              <P>Javascrip</P>
              <P>Bootstrap</P>
              <P>Node.js</P>
            </Tecnologias>
          </Div>
        </Container>
      </Section>
    </>
  );
};
