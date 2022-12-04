import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";
import {TitleH2} from "../../../../../styles/components";

const Container = styled.section`
  background: ${({theme}) => theme.bodySecondary};
  padding: 5rem 0;

  ${TitleH2} {
    text-align: center;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    padding: 3rem 0;
  }
`;

export default Container;