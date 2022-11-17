import styled from "styled-components";
import breakpoints from "../../../../styles/helpers/breakpoints"

const Burger = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  
  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    display: flex;
  }
`;

export default Burger;