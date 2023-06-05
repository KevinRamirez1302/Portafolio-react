import { Section, Titulo } from "./styles"
import { AboutMe } from "../Aboutme/aboutMe"
import { Footer } from "../../Footer/Footer"

export const Header = () => {
    return <>
        <Section>
            <Titulo>
                <h1 style={{fontFamily: 'Poppins'}}> <span style={{color:'#00ADB5',fontFamily: 'Poppins'}}>Hi</span>, My Name is <span style={{color:'#00ADB5',fontFamily: 'Poppins'}}>Kevin</span></h1>
                <h2 style={{fontFamily: 'Poppins'}}><span style={{color:'#00ADB5',fontFamily: 'Poppins'}}>Front End</span> Developer</h2>
                <img src="" alt="" />
            </Titulo>
        </Section>

        <AboutMe />
        <Footer />
    </>
}