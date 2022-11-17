import styled from "styled-components";
import breakpoints from "../../../../../styles/helpers/breakpoints";

const Title = styled.h1`
  padding: 0 1rem 0 2rem;
  font-size: 3.5rem;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.3;
  
  .carousel {
    height: 68px;
    line-height: 68px;
    overflow: hidden;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;
    animation: move calc(2s * 6) steps(6) infinite;
    
    li {
      flex-shrink: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      animation: liMove 2s infinite;
    }
  }
  
  strong {
    color: ${({theme}) => theme.textSecondary};
  }

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, calc(6 * 68 * -1px));
    }
  }

  @keyframes liMove {
    0% {
      transform: translate(0, 0);
    }
    80%,
    100%  {
      transform: translate(0, calc(68 * -1px));
    }
  }

  @media only screen and (max-width: ${breakpoints.maxTablet}px) {
    font-size: 2.5rem;
    padding: 2rem 1rem;
  }

  @media only screen and (max-width: ${breakpoints.maxMobile}px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: ${breakpoints.maxSmallMobile}px) {
    font-size: 1.5rem;
  }
`;

export default Title;