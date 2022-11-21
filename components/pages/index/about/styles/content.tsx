import styled from "styled-components";
import aboutInner from "./aboutInner";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: ${breakpoints.maxNotebook}px;
  width: 100%;
  margin: auto;
  
  > picture {
    display: block;
    max-width: 40%;
    width: 100%;
    padding: 0 1.5rem;
    position: relative;
    
    img {
      object-fit: cover;
      max-width: 100%;
      height: auto;
      border-radius: 20px;
    }
  }
  
  ${aboutInner} {
    max-width: 60%;
    width: 100%;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    > picture {
      max-width: 100%;
      padding: 1rem 1.5rem;
      
      img {
        margin: auto;
      }
    }

    ${aboutInner} {
      max-width: 100%;
      padding: 1rem 1.5rem;
    }
  }
`;

export default Content;