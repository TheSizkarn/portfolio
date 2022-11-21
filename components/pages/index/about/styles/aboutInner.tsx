import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const AboutInner = styled.div`
  > p {
    font-size: 18px;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    > p {
      font-size: 1rem;
    }
  }
`;

export default AboutInner;