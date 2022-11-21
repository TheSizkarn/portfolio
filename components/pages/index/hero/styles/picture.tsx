import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const Picture = styled.picture`
  display: block;
  max-width: 400px;
  width: 100%;
  padding: 0 2rem;

  img {
    max-width: initial;
    width: 100%;
    height: 100%;
    border: 14px solid rgba(255,255,255,.2);
    border-radius: 100%;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(255, 255, 255, 0.15);
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    max-width: 300px;
    padding: 0;
    
    img {
      border-width: 10px;
    }
  }
`;

export default Picture;