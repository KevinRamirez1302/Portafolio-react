import { Section, Titulo } from "./styles"
import { AboutMe } from "../Aboutme/aboutMe"
import { Footer } from "../../Footer/Footer"

export const Header = () => {
    return <>
        <Section>
            <Titulo>
                <h1>Hi, My name is Kevin</h1>
                <h2>Front End Developer</h2>
                <img src="" alt="" />
            </Titulo>
        </Section>

        <AboutMe />
        <Footer />
    </>
}