import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const Content = styled.div`
  max-width: ${breakpoints.maxNotebook}px;
  margin: auto;
  padding: 0 1rem;
  
  > p {
    text-align: center;
    font-size: 18px;
  }

  @media only screen and (max-width: ${breakpoints.maxMobile}px) {
    > p {
      font-size: 1rem;
    }
  }
`;

export default Content;