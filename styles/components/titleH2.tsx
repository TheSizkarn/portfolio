import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";

const TitleH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({theme}) => theme.text};
  margin-bottom: 2rem;

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    font-size: 1.5rem;
  }
`;

export default TitleH2;