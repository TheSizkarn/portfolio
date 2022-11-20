import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${breakpoints.maxNotebook}px;
  margin: 0 auto;

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    flex-direction: column;
  }
`;

export default Content;