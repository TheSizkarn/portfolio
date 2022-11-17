import {Container, Content, Picture, Title} from "./styles";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <Content>
        <Picture>
          <Image src='/jallain.jpg' alt='Julien ALLAIN' width={370} height={370} quality={100} priority={true} />
        </Picture>
        <Title>
          Hello, je suis Julien Allain<br/>
          <div className='carousel'>
            <ul>
              <li><strong>Développeur web</strong></li>
              <li><strong>UX Designer</strong></li>
              <li><strong>Front-End</strong></li>
              <li><strong>React</strong></li>
              <li><strong>NextJS</strong></li>
              <li><strong>Wordpress</strong></li>
            </ul>
          </div>
        </Title>
      </Content>
    </Container>
  )
}

export default Hero;