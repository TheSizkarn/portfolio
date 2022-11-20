import {Container, Content, AboutInner} from "./styles";
import {TitleH2} from "../../../../styles/components";
import Image from "next/image";

const About = () => {
  return (
    <Container id="about">
      <Content>
        <picture>
          <Image src='/jallain2.jpg' alt='Julien ALLAIN Développeur web Freelance' loading='lazy' width={500} height={600} quality={100} />
        </picture>
        <AboutInner>
          <TitleH2>À propos de moi</TitleH2>
          <p>
            Après quatre années riche en expérience en tant que <strong>développeur web front-end</strong> dans une
            agence de communication à Tours, j'ai décidé de devenir <strong>Freelance</strong> afin de vous apporter mon expertise et de répondre à vos projets web !
          </p>
        </AboutInner>
      </Content>
    </Container>
  )
}

export default About;