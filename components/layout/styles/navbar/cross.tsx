import styled from "styled-components";
import breakpoints from "../../../../styles/helpers/breakpoints";

const cross = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: .5rem;
  z-index: 9999;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    display: flex;
  }
`

export default cross;