import styled from "styled-components";
import breakpoints from "../../../../styles/helpers/breakpoints";

const Logo = styled.div`
  max-width: 230px;
  
  a, svg {
    width: 100%;
    display: flex;
  }
  
  svg {
    fill: ${({ theme }) => theme.text};
  }

  @media only screen and (max-width: ${breakpoints.maxMobile}px) {
    max-width: 160px;
  }
`;

export default Logo;