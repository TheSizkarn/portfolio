import styled from "styled-components";
import breakpoints from "../../../../styles/helpers/breakpoints";

const cross = styled.span`
  display: flex;
  position: absolute;
  top: -150px;
  visibility: hidden;
  opacity: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-top: .5rem;
  margin-bottom: .5rem;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    display: flex;
    visibility: visible;
    opacity: 1;
    position: initial;
  }
`

export default cross;