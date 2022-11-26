import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const AboutInner = styled.div`
  > p {
    font-size: 18px;
  }
  
  .skills {
    margin-top: 2rem;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    > p {
      font-size: 1rem;
    }
  }
`;

export default AboutInner;