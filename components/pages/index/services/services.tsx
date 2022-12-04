import {Container, Content, ListServices} from "./styles";
import {TitleH2} from "../../../../styles/components";
import DesktopSvg from "../../../../public/svg/desktop.svg";
import EcommerceSvg from "../../../../public/svg/ecommerce.svg";
import MobileSvg from "../../../../public/svg/mobile.svg";

const Services = () => {
  return (
    <Container>
      <TitleH2>Mes services</TitleH2>
      <Content>
        <p>Découvrez mes services dans de développement de site Internet en passant par un site vitrine ou bien un site
          e-commerce.
          <br/>
          Tout pour répondre idéalement à votre projet web.
        </p>
        
        <ListServices>
          <li>
            <div>
              <span><DesktopSvg/></span>
              <h2>Vitrine</h2>
              <p>
                Pour améliorer votre visibilité sur Internet, rien de plus efficace que la
                création d'un site vitrine !
              </p>
            </div>
          </li>
          <li>
            <div>
              <span><EcommerceSvg/></span>
              <h2>E-commerce</h2>
              <p>
                Vendez vos créations, vos produits, faites vous connaître au-delà de votre localité avec un site e-commerce.
              </p>
            </div>
          </li>
          <li>
            <div>
              <span><MobileSvg/></span>
              <h2>Responsive</h2>
              <p>
                Votre site web sera adapté à tous les formats d'écran : ordinateur, tablette et smartphone.
              </p>
            </div>
          </li>
        </ListServices>
      </Content>
    </Container>
  )
}

export default Services;