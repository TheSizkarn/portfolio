import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const Container = styled.section`
  padding: 5rem 0;

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    padding: 3rem 0;
  }
`;

export default Container;