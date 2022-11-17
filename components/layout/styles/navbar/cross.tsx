import styled from "styled-components";
import breakpoints from "../../../../styles/helpers/breakpoints";

const cross = styled.span`
  @media only screen and (min-width: ${breakpoints.minTabletLarge}px) {
    display: none;
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    display: flex;
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
  }
`

export default cross;